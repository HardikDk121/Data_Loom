import express from "express";
import User from "../models/User.js";
const router = express.Router()

router.get("/" , (req,res) => { 
        res.send("chalu che")
})

router.post("/login", async(req,res) => {
    try
    {
        const { email , password } = req.body;
        if(!email || !password)
        {
            return res.status(400).json({success:false , message: "All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(404).json({ success : false, message: "User does not exist"});
        }

        if(user.password !== password)
        {
            return res.status(401).json({message: "Invalid credentials"});
        }
        return res.status(200).res.json({ success: true, message: "Login successful",name: user.name});
    }
    catch(err)
    {
        return res.status(500).json({error: err.message});
    }
}
)
router.post('/register', async (req, res) => {
    try {
        console.log("Received data:", req.body);

        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            console.log("Missing fields - Sending 400");
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const exist = await User.findOne({ email });
        console.log("Checking if user exists:", exist);

        if (exist) {
            console.log("User already exists - Sending 409");
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        const user = new User({ name, email, password });
        await user.save();

        console.log("User registered successfully - Sending 201");
        return res.status(201).json({ success: true, name: user.name });
    } 
    catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({ error: err.message });
    }
});

export default router ;