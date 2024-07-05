import mongoose, {Schema} from "mongoose";

/**
 * Represents the user interface.
 * @interface IUser
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
interface IUser {
    name: string;
    email: string;
    password: string;
}

/**
 * Represents the user schema.
 * @const userSchema
 * @type {Schema}
 * @property {string} name - The name of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 */
const userSchema : Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

/**
 * Represents the user model.
 * @param {IUser} - The user interface.
 * @param {Schema} - The user schema.
 * @returns {IUser} - The user model.
 */
const User = mongoose.model<IUser>('User', userSchema);

/**
 * Represents the user model.
 * @exports User - The user model.
 */
export default User;