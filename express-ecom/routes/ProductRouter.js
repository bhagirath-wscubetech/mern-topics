const express = require("express");
const ProductRouter = express.Router();

// ProductRouter
ProductRouter.get("/:id?", (req, res) => {
    res.send("Get Products");
});
ProductRouter.post("/store", (req, res) => {
    res.send("Store Products");
});
ProductRouter.patch("/:id", (req, res) => {
    res.send("Update Products");
});
ProductRouter.delete("/:id", (req, res) => {
    res.send("Get Products");
});

module.exports = ProductRouter;