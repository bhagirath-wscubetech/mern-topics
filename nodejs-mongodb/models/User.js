import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        length: 20,
    },
    email: {
        type: String,
        length: 50
    },
    contact: {
        type: String,
        length: 15
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        default: null
    },
    address: {
        type: String
    },
    status: {
        type: Boolean,
        default: 1
            // 1: active, 0: inactive
    },
    dob: {
        type: Date
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    },
    updated_at: {
        type: Date,
        default: null
    }
})

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;