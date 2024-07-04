import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('MONGODB_URI is not defined');
        process.exit(1); 
    }

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;