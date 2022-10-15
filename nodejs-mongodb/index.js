import mongoose from "mongoose";
import UserModel from "./models/User.js";
await mongoose.connect(
        "mongodb+srv://wscubetech:Tujdr5po8uP0X7yt@cluster0.ozqpmsb.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(
        (resolve) => {
            console.log("Connection done");
        }
    ).catch(
        (reject) => {
            console.log("Unable to connect");
        }
    )
console.log("Hello");
// user