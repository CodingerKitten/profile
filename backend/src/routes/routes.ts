import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import { validateUser } from '../middleware/auth';
// import { validateRegister, validateLogin } from '../middleware/validateUser';

/**
 * Express router to mount user related functions on.
 */
const router = express.Router();
/**
 * Route serving user registration.
 * @name POST/api/users/register
 */
router.post('/register', registerUser);
/**
 * Route serving user login.
 * @name POST/api/users/login
 */ 
router.post('/login', loginUser);
/**
 * Route serving user profile.
 * @name GET/api/users/profile
 */
router.get('/profile', validateUser, getUserProfile);

export default router;