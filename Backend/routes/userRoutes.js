import express from 'express';
import { googleLoginUser, loginUser, registerUser } from '../controllers/users.js';
import { loginLimiter } from '../middleware/rateLimiter.js';



const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/google-login', googleLoginUser);
userRouter.post('/login',loginLimiter, loginUser);

export default userRouter;