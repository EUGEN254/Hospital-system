import express from "express";
import {
  googleLoginUser,
  loginUser,
  sendResetOtp,
  registerUser,
  verifyResetOtp,
  ResetPassword,
  fetchCurrentUser,
  logout,
} from "../controllers/users.js";
import {
  loginLimiter,
  otpRequestLimiter,
  otpVerifyLimiter,
} from "../middleware/rateLimiter.js";
import userAuth from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/google-login", googleLoginUser);
userRouter.get("/get-user",userAuth,fetchCurrentUser)
userRouter.post("/login", loginLimiter, loginUser);
userRouter.post("/logout", logout);

// Password routes
userRouter.post("/send-reset-otp", otpRequestLimiter, sendResetOtp);
userRouter.post("/verify-reset-otp", otpVerifyLimiter, verifyResetOtp);
userRouter.post("/reset-password", ResetPassword);

export default userRouter;
