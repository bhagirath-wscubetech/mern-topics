import mongoose from "mongoose"
// const User = mongoose.model("User")
import User from "../Models/User.js";

class UserController {
    get() {
        return new Promise(
            (resolve, reject) => {
                const data = User.find();
                // console.log(data)
                resolve(data)
                    // resolve(data)
            }
        )
    }

    store(data) {
        return new Promise(
            (resolve, reject) => {
                const user = new User(data)
                user.save().then(
                    (res) => {
                        // console.log("")
                        resolve(res._id);
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                            // console.log("Data not saved")
                        resolve("Unable to store the data");
                    }
                )
            }
        )
    }

}

export { UserController }