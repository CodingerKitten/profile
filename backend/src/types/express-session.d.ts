import session from "express-session";

/**
 * Extends the SessionData interface from Express to include a user property.
 * @interface SessionData
 * @property {object} user - The user property.
 * @property {string} user.userId - The user ID.
 * @property {string} user.userName - The user name.
 * @property {string} user.userEmail - The user email.
 * @extends {SessionData}
 * @exports SessionData - The extended SessionData interface.
 * @module types/express-session
 */
declare module 'express-session'{
    interface SessionData {
        user: {
            userId: string;
            userName: string;
            userEmail: string;
        };
    }
}