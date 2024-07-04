import express from 'express';
import { registerUser, loginUser } from '../controllers/userController';
// import { validateRegister, validateLogin } from '../middleware/validateUser';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;