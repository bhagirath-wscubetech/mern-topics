import express from "express"
import { UserRouter } from "./Routes/user.js"
import bodyParser from "body-parser";
const PORT = process.env.PORT || 5000;
const app = express()

app.use(bodyParser.json()) // middleware application/json

app.use("/api/users", UserRouter);


app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));