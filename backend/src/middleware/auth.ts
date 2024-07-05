import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JwtPayloadWithId } from '../types/express';

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