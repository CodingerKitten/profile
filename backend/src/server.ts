import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import router from './routes/user';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', router); //*****TODO: Test this api*****

//Connect to MongoDB
connectDB();

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});