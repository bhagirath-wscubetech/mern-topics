const fs = require("fs")
const http = require("http")


const server = http.createServer(
    (request, response) => {
        // console.log(request)
        let page = fs.readFileSync("templates/404.html", "utf-8") //404
        let status = 404;
        if (request.url === "/") {
            page = fs.readFileSync("templates/home.html", "utf-8")
            status = 200;
        } else if (request.url === "/about") {
            page = fs.readFileSync("templates/about.html", "utf-8")
            status = 200;
        }
        response.writeHead(status, { 'Content-Type': 'text/HTML' });
        response.end(page)
    }
)

server.listen(5000, () => {
    console.log(`The server is running on http://localhost:5000`)
})