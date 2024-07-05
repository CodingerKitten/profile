import { JwtPayload } from "jsonwebtoken";

declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayloadWithId;
    }
}

interface JwtPayloadWithId extends JwtPayload {
    id: string;
}