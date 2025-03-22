import express from "express";
import router from "./routes/router.js";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js";
import  User  from "./models/User.js";
import  Dataset  from "./models/Dataset.js";
import  Chart  from "./models/Chart.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

connectDB();

app.use(router);

app.use(
    cors({
        origin: "http://localhost:5173", // Replace with your React frontend URL
        methods: "GET,POST,PUT,DELETE",
        credentials: true, // Allow cookies (if needed)
    })
);

app.listen(PORT,()=> 
    console.log(`Express server running on: http://localhost:${PORT}`));
