require('dotenv').config()
const express = require('express');
require("./src/helpers/database/database");
const jwt = require("jsonwebtoken");

const userRouter = require("./src/routes/userRouter");
const userAddressRouter = require("./src/routes/user/userAddressRouter");

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    console.log(req.headers);
    res.status(200).send(req.headers.toString())
})

app.use(userRouter);
app.use(userAddressRouter);

app.listen(port, () => {
    console.log(`app is running in port ${port}`)
})
