const express = require('express');
require("./src/helpers/database/database");
const jwt = require("jsonwebtoken");

const userRouter = require("./src/routes/userRouter");
const userAddressRouter = require("./src/routes/user/userAddressRouter");
const userPayments = require("./src/routes/user/userPaymentRouter");

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(userAddressRouter);
app.use(userPayments);

app.get("/test", (req, res) => {
    res.status(200).send("status will send in the user");
})

module.exports = app;
