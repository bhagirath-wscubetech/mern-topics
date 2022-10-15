import express from "express"
import { UserController } from "../Controllers/User.js"
const UserRouter = express.Router()

UserRouter.get(
    "/",
    async(req, res) => {
        const result = await new UserController().get()
        res.send((result))
    }
)


UserRouter.post(
    "/",
    async(req, res) => {
        const result = await new UserController().store(req.body)
        res.send(result)
    }
)

export { UserRouter }