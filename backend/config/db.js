import {mongoose} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbURI = process.env.MONGO_URI;
const connectDB = async()=>
{
    try
    {
        await mongoose.connect(dbURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('MongoDB connected');
    }
    catch(error)
    {
        console.error('Error:',error);
    }
};
export default connectDB;