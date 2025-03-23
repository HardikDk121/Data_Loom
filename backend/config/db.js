import {mongoose} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbURI = process.env.MONGODB_URI;
const connectDB = async()=>
{
    try
    {
        await mongoose.connect(dbURI);
        console.log('MongoDB connected');
    }
    catch(error)
    {
        console.error('Error:',error);
    }
};
export default connectDB;