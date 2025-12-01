import rateLimit, { ipKeyGenerator } from 'express-rate-limit';


export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes 
    max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
    message: {
        success: false,
        message: "Too many login attempts from this device, please try again after a minute"
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export const otpRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3,
  message: { success: false, message: "Too many OTP requests, please try again later." },
  keyGenerator: (req, res) => req.body.email || ipKeyGenerator(req, res),
});

export const otpVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many OTP verification attempts, please try again later." },
  keyGenerator: (req, res) => req.body.email || ipKeyGenerator(req, res),
});