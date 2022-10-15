const express = require("express");
const CategoryRouter = express.Router();

CategoryRouter.get("/:id?", (req, res) => {
    res.send("Get categories");
});
CategoryRouter.post("/store", (req, res) => {
    res.send("Store category");
});
CategoryRouter.patch("/:id", (req, res) => {
    res.send("Update category");
});
CategoryRouter.delete("/:id", (req, res) => {
    res.send("Delete category");
});

module.exports = CategoryRouter;