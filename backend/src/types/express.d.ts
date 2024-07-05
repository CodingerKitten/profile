import { JwtPayload } from "jsonwebtoken";

/**
 * Extends the Request interface from Express to include a user property.
 * @interface Request
 * @property {string | JwtPayloadWithId} user - The user property.
 * @extends {Request}
 * @exports Request - The extended Request interface.
 * @module types/express
 * @see {@link https://expressjs.com/en/4x/api.html#req|Express Request}
 * @see {@link https://www.npmjs.com/package/jsonwebtoken|jsonwebtoken}
 */

declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayloadWithId;
    }
}

interface JwtPayloadWithId extends JwtPayload {
    id: string;
}