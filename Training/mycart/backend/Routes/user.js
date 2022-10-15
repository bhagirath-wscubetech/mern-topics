import express from "express";

let data = [{
        id: "1",
        name: "John",
        age: 24,
        gender: "M"
    },
    {
        id: "2",
        name: "Jenny",
        age: 26,
        gender: "F"
    },
]

const UserRouter = express.Router();

// app.get("api/users/") // retrun the list of all users
// app.post("api/users/") // create a new user
// app.get("api/users/:id") // retrurn a particular user
// app.delete("api/users/:id") // remove that user

UserRouter.get("/", (req, res) => {
    res.status(200);
    res.send(JSON.stringify(data))
})

UserRouter.post("/", (req, res) => {
    const userData = req.body;
    const id = data.length + 1;
    const newUser = {...userData, id };
    data.push(newUser)
    res.send("User created successfully")
})

UserRouter.get("/:id", (req, res) => {
    const userId = req.params.id;
    const userData = data.find(d => d.id == userId)
    res.send(JSON.stringify(userData))
})

UserRouter.delete("/:id", (req, res) => {
    const userId = req.params.id;
    const updatedData = data.filter(d => d.id != userId)
    console.log(updatedData)
    data = updatedData;
    res.send("User deleted successfully");
})

UserRouter.put("/:id", (req, res) => {
    const reqData = (req.body);
    const userId = req.params.id;
    const userData = data.find(d => d.id == userId)
    const updatedData = data.filter(d => d.id != userId)
    data = updatedData;
    console.log(userData, reqData)
    const updatedUser = {...userData, ...reqData }
    data.push(updatedUser);
    res.send("");
})
export { UserRouter }