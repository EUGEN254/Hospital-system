import express from 'express';
import cors from 'cors';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/connectDB.js';
import connectCloudinary from './configs/cloudinary.js';
import helmet from "helmet";

// express setup
const app = express();
const PORT = process.env.PORT || 4000;

// cloudinary setup
await connectCloudinary();

// determine allowed origins based on environment
const isProduction = (process.env.NODE_ENV || 'development') === 'production';
const allowedOrigins = (
    isProduction ? process.env.PROD_ORIGINS : process.env.DEV_ORIGINS
)?.split(",")

// IMPORTANT: Apply middleware in correct order
app.use(express.json({limit: '5mb'}));
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(helmet()); // sets secure HTTP headers

// test route
app.get('/', (req, res) => {
    res.send(`Server is running in ${process.env.NODE_ENV} mode`);
});

// REST API ROUTES
app.use("/api/users", userRouter);

// CONNECT TO DATABASE
await connectDB();

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});