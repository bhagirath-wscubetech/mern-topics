const express = require("express");
const OrderRouter = express.Router();

OrderRouter.get("/:id?", (req, res) => {
    res.send("Get orders");
});
OrderRouter.post("/store", (req, res) => {
    res.send("Store order");
});
OrderRouter.patch("/:id", (req, res) => {
    res.send("Update order");
});
OrderRouter.delete("/:id", (req, res) => {
    res.send("Delete order");
});

module.exports = OrderRouter;