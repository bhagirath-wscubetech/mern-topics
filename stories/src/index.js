const express = require("express");
const path = require("path");

console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
console.log(staticPath)
const app = express();
const PORT = 5000;

// middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "/index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(staticPath, "/about.html"));
})
app.get("/foods", (req, res) => {
    res.sendFile(path.join(staticPath, "/foods.html"));
})
app.get("/lifestyle", (req, res) => {
    res.sendFile(path.join(staticPath, "/lifestyle.html"));
})
app.get("/contact", (req, res) => {
    res.sendFile(path.join(staticPath, "/contact.html"));
})
app.get("/single", (req, res) => {
    res.sendFile(path.join(staticPath, "/single.html"));
})

app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}`);
})