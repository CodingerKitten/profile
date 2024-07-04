import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import exp from 'constants';
import connectDB from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to MongoDB
connectDB();

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});