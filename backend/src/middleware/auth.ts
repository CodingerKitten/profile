import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JwtPayloadWithId } from '../types/express';

/**
 * Middleware function to validate user authentication using JWT token.
 * If the token is valid, it decodes the token and attaches the decoded user information to the request object.
 * If the token is invalid or missing, it sends an error response.
 * @param req - Express Request object
 * @param res - Express Response object
 * @param next - Express NextFunction
 */
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "No token, authorization denied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayloadWithId;

        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({message: "Invalid token"});
    }
}