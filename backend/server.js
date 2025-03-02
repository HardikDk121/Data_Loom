import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(router);

app.use(
    cors({
        origin: "http://localhost:5173", // Replace with your React frontend URL
        methods: "GET,POST,PUT,DELETE",
        credentials: true, // Allow cookies (if needed)
    })
);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(PORT,()=> 
        console.log(`Express server running on: http://localhost:${PORT}`));
})
.catch((error)=>{
    console.error(error)
})
