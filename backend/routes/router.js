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
            return res.status(400).json({msg: "All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({msg: "User does not exist"});
        }

        if(user.password !== password)
        {
            return res.status(400).json({msg: "Invalid credentials"});
        }
        return res.json({name: user.name});
    }
    catch(err)
    {
        return res.status(500).json({error: err.message});
    }
}
)
router.post('/register', async(req, res) =>
{
        try
        {   console.log(req.body); 
            const { name, email, password } = req.body;
            if(!name || !email || !password)
            {
                return res.status(400).json({msg: "All fields are required"});
            }

            const exist = await User.findOne({email});
            
            if(exist)
            {
                return res.status(400).json({msg: "User already exists"});
            }

            const user = new User({
                name,
                email,
                password
            });

            await user.save();
            return res.json({ name: user.name });
        }
        catch(err)
        {
            return res.status(500).json({error: err.message});
        }
})
export default router ;