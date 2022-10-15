import http from "http"
import { BlogController } from "./Controllers/blog.js";
const PORT = process.env.PORT || 5000;
const app = http.createServer(
    async(req, res) => {
        let respCode = 404;
        let jsonResp = "";
        if (req.url == "/api/blogs" && req.method == "GET") {
            respCode = 200;
            const data = await new BlogController().getBlogs()
            jsonResp = JSON.stringify(data)
        } else if (req.url.match(/\api\/blogs\/([0-9]+)/) && req.method == "GET") {
            respCode = 200;
            const blogId = req.url.split("/")[3]
            const data = await new BlogController().getBlog(blogId)
            console.log(data)
            jsonResp = JSON.stringify(data);
        } else {
            jsonResp = JSON.stringify({
                msg: "Route not found"
            });
        }
        res.writeHead(respCode, { "Content-Type": "application/json" })
        res.end(jsonResp)
    }
)

app.listen(
    PORT,
    () => {
        console.log(`The app is running on http://localhost:${PORT}`);
    }
)