import { BlogController } from "./Controllers/blog.js";
import express from "express"

const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })

// app.post("/test", (req, res) => {
//     res.send("Hello")
// })

app.get('/api/blogs', async(req, res) => {
    const data = await new BlogController().getBlogs()
    res.status(200);
    res.send(JSON.stringify(data));
})
app.get('/api/blogs/:id', async(req, res) => {
    const id = req.params.id;
    const data = await new BlogController().getBlog(id)
    res.send(JSON.stringify(data));
})

app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}`);
})