import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import { validateUser } from '../middleware/auth';
// import { validateRegister, validateLogin } from '../middleware/validateUser';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', validateUser, getUserProfile);

export default router;