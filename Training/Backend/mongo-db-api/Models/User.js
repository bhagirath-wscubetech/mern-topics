import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    age: Number,
    created_at: {
        type: Date,
        default: new Date().getTime()
    }
})

// export { UserSchema }
export default mongoose.model("User", UserSchema)