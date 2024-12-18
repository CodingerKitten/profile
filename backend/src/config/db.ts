import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

/**
 * Connects to MongoDB.
 * @function connectDB
 * @returns {Promise<void>}
 * @async
 * @name connectDB
 * @throws {Error} - Throws an error if the MongoDB URI is not defined.
 * @throws {Error} - Throws an error if the MongoDB connection fails.
 */
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