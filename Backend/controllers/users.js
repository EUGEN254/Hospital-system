import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/usersSchema.js";
import { OAuth2Client } from "google-auth-library";
import PasswordReset from "../models/passwordResetSchema.js";
import { sendOtpEmail } from "../utils/emailService.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, termsAccepted } = req.body;

    // check if required fields are present
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fileds required" });
    }

    // check if user accepted terms
    if (!termsAccepted) {
      return res.status(400).json({
        success: false,
        message: "You must accept Terms and Privacy Policy",
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user(default role:patient)
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      termsAccepted: termsAccepted || false,
    });

    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only over HTTPS in production
      sameSite: "strict", // prevent CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    // find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    // generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only over HTTPS in production
      sameSite: "strict", // prevent CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const googleLoginUser = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        fullName: name,
        email,
        password: null, // since Google login
        avatar: picture,
        role: "patient", // default role
      });
      await user.save();
    }

    // Generate JWT token
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Send response with cookie
    res
      .cookie("token", jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(200)
      .json({ success: true, message: "Logged in with Google", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: "Invalid Google token" });
  }
};

const fetchCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Not Authorised",
      });
    }

    const safeUser = req.user;
    res.json({ success: true, user: safeUser });
  } catch (error) {
    console.error("Error in getUser", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/* =========================
   SEND RESET OTP - UPDATED
========================= */

const sendResetOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

    //remove old otps of this email
    await PasswordReset.deleteMany({ email });

    // save new otp
    await PasswordReset.create({ email, otp, expiresAt });

    // using brevo api
    await sendOtpEmail(email, otp);

    res.status(200).json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("Error sending reset OTP:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const verifyResetOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await PasswordReset.findOne({ email, otp });
    if (!record)
      return res.status(400).json({ success: false, message: "Invalid OTP" });

    if (record.expiresAt < new Date())
      return res.status(400).json({ success: false, message: "OTP expired" });

    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("verifyResetOtp error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const ResetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const record = await PasswordReset.findOne({ email, otp });
    if (!record) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    if (record.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    // delete used otp
    await PasswordReset.deleteMany({ email });

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.error("ResetPassword error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export {
  registerUser,
  fetchCurrentUser,
  ResetPassword,
  loginUser,
  googleLoginUser,
  verifyResetOtp,
  sendResetOtp,
};
