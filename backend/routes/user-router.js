import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
const userRouter = express.Router()

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Received data:", req.body);
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    return res.status(200).json({ success: true, message: "Login successful", name: user.name, id: user.id.toString() });
  }
  catch (err) {
    console.error("Server error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
)
userRouter.post('/register', async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      console.log("Missing fields - Sending 400");
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const exist = await User.findOne({ email });


    if (exist) {
      console.log("User already exists - Sending 409");
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const saltnumber = 10;
    const salt = await bcrypt.genSalt(saltnumber);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    console.log("User registered successfully - Sending 201");
    return res.status(201).json({ success: true, name: user.name, id: user.id.toString() });
  }
  catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: err.message });
  }
});

export default userRouter;
