import mongoose from "mongoose";
const { Schema } = mongoose
import { note } from "./Note.js";

type user = {
    username: string,
    password: string,
    notes: note[]
}

const userSchema = new Schema<user> ({
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    notes: [
        {
            content: String,
            _id: String
        }
    ]
})