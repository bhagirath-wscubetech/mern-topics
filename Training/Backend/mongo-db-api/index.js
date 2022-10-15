import express from "express";
import mongoose from "mongoose";
import { UserRouter } from "./Routes/User.js"
import bodyParser from "body-parser"
let connectionFlag;
// 'mongodb+srv://wscubetech:v2hj3DxEzyDlISxx@cluster0.0iet0.mongodb.net/?retryWrites=true&w=majority'
await mongoose.connect('mongodb+srv://wscubetech:v2hj3DxEzyDlISxx@cluster0.isns1x5.mongodb.net/?retryWrites=true&w=majority')
    .then(
        () => {
            connectionFlag = true;
            console.log("Connection")
        }
    )
    .catch(
        () => {
            connectionFlag = false;
            console.log("The connection Failed")
        }
    )

const PORT = 5000;
const app = express()
if (connectionFlag) {
    app.use(bodyParser.json())
    app.use("/api/user", UserRouter)
    app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`))
}