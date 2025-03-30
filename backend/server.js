import express from "express";
import userRouter from "./routes/user-router.js";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

connectDB();

app.use(
    cors({
        origin: "http://localhost:5173", 
        methods: "GET,POST,PUT,DELETE",
        credentials: true, 
    })
);
app.use("/api/users",userRouter);


app.listen(PORT,()=> 
    console.log(`Express server running on: http://localhost:${PORT} `))
