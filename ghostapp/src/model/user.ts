// For mongodb

import mongoose, {Schema, Document} from "mongoose";
import { markCurrentScopeAsDynamic } from "next/dist/server/app-render/dynamic-rendering";

export interface Message extends Document{
    content: string; // TypeScript
    created_at: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String, // Mongoose
        required: true
    },
    created_at: {
        type: Date, // Mongoose
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String, // Mongoose
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    email: {
        type: String, // Mongoose
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/,'prease use a valid email address']
    },
    password: {
        type: String, // Mongoose
        required: [true, 'password is required'],
    },
    verifyCode: {
        type: String, // Mongoose
        required: [true, 'Verify code is required'],
    },
    verifyCodeExpiry: {
        type: Date, // Mongoose
        required: [true, 'Verify code is required'],
    },
    isVerified: {
        type: Boolean, // Mongoose
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean, // Mongoose
        default: false,
    },
    messages:  [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema) 

export default UserModel;