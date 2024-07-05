import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JwtPayloadWithId } from "../types/express";

/**
 * Registers a new user.
 * 
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is registered.
 * @async
 * @function
 * @name registerUser
 */
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!, {expiresIn: '1h'});

        res.status(201).json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

/**
 * Logs in a user.
 * 
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user is logged in.
 * @async
 * @function
 * @name loginUser
 */
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET!, {
            expiresIn : '1h'});

        res.status(200).json({token});
    }catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

/**
 * Retrieves the user profile.
 * 
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user profile is retrieved.
 * @async
 * @function
 * @name getUserProfile
 */
export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const user = await User.findById((req.user as JwtPayloadWithId).id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};