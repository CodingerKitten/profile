import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import router from './routes/routes';

dotenv.config();

/**
 * Express server 
 */
const app = express();
/**
 * The port the server will listen on.
 */
const PORT = process.env.PORT || 5000;

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());

/**
 * Routes
 */
app.use('/api/users', router);

/**
 * Connect to MongoDB and start the server
 */
connectDB();

/**
 * Start the server
 * @param {number} PORT - The port the server will listen on.
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});