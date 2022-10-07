const express = require('express');
require("./src/helpers/database/database");
const jwt = require("jsonwebtoken");

const userRouter = require("./src/routes/userRouter");
const userAddressRouter = require("./src/routes/user/userAddressRouter");
const cartItem = require("./src/routes/user/cartItemRouter");
const userCart = require("./src/routes/user/userCartRouter");
const userPayments = require("./src/routes/user/userPaymentRouter");
const productCatogery = require("./src/routes/admin/proCatRouter");
const productDiscount = require("./src/routes/admin/proDisRouter");
const product = require("./src/routes/admin/productRouter");
const adminOrders = require("./src/routes/admin/adminOrdersRouter");
const searchProductRouter = require("./src/routes/futures/searchProductRouter");

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(userAddressRouter);
app.use(userCart);
app.use(cartItem);
app.use(userPayments);
app.use(productCatogery);
app.use(productDiscount);
app.use(product);
app.use(adminOrders);
app.use(searchProductRouter);

app.get("/test", (req, res) => {
    res.status(200).send("status will send in the user");
})

module.exports = app;
