const express = require("express");
const app = express();
const ProductRouter = require("./routes/ProductRouter.js");
const OrderRouter = require('./routes/OrderRouter.js');
const CategoryRouter = require('./routes/CategoryRouter');
const PORT = 5000;

// Router
app.use("/product", ProductRouter);
app.use('/order', OrderRouter);
app.use('/category', CategoryRouter);
// -------


app.listen(PORT, () => console.log('App Running'));