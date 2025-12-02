import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/usersSchema.js";
import { OAuth2Client } from "google-auth-library";
import PasswordReset from "../models/passwordResetSchema.js";
import { sendOtpEmail } from "../utils/emailService.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/* =========================
    REGISTER USER
========================= */
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, termsAccepted } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    if (!termsAccepted) {
      return res.status(400).json({
        success: false,
        message: "You must accept Terms and Privacy Policy"
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      termsAccepted,
      role: "patient"
    });

    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role
      },
      token
    });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    LOGIN USER (Email + Password)
========================= */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Prevent Google accounts from using password login
    if (!user.password) {
      return res.status(400).json({
        success: false,
        message: "This account was created using Google Sign-In. Please log in using Google."
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      },
      token
    });

  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    LOGIN USER (Google OAuth)
========================= */
const googleLoginUser = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      // Create Google user with no password
      user = await User.create({
        fullName: name,
        email,
        password: null,
        avatar: picture,
        role: "patient"
      });
    }

    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      success: true,
      message: "Logged in with Google",
      user
    });

  } catch (error) {
    console.error("Google login error:", error);
    res.status(400).json({ success: false, message: "Invalid Google token" });
  }
};


/* =========================
    FETCH CURRENT USER
========================= */
const fetchCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }

    res.json({ success: true, user: req.user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    LOGOUT
========================= */
const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    SEND RESET OTP
========================= */
const sendResetOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await PasswordReset.deleteMany({ email });

    await PasswordReset.create({ email, otp, expiresAt });

    await sendOtpEmail(email, otp);

    res.json({ success: true, message: "OTP sent to email" });

  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    VERIFY OTP
========================= */
const verifyResetOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await PasswordReset.findOne({ email, otp });
    if (!record) return res.status(400).json({ success: false, message: "Invalid OTP" });

    if (record.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    res.json({ success: true, message: "OTP verified successfully" });

  } catch (error) {
    console.error("verifyResetOtp error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


/* =========================
    RESET PASSWORD
========================= */
const ResetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const record = await PasswordReset.findOne({ email, otp });
    if (!record) return res.status(400).json({ success: false, message: "Invalid OTP" });

    if (record.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    await PasswordReset.deleteMany({ email });

    res.json({ success: true, message: "Password reset successful" });

  } catch (error) {
    console.error("ResetPassword error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export {
  registerUser,
  loginUser,
  googleLoginUser,
  fetchCurrentUser,
  logout,
  sendResetOtp,
  verifyResetOtp,
  ResetPassword
};
