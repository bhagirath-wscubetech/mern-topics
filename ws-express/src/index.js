const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get(
    "/about",
    (req, res) => {
        res.sendFile(path.join(staticPath, "/about.html"));
    }
)
app.get(
    "/contact",
    (req, res) => {
        res.sendFile(path.join(staticPath, "/contact.html"));
    }
)
app.get(
    "/food",
    (req, res) => {
        res.sendFile(path.join(staticPath, "/foods.html"));
    }
)
app.get(
    "/lifestyle",
    (req, res) => {
        res.sendFile(path.join(staticPath, "/lifestyle.html"));
    }
)
app.get(
    "/single",
    (req, res) => {
        res.sendFile(path.join(staticPath, "/single.html"));
    }
)

app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}`);
});