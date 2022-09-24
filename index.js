require('dotenv').config()
const express = require('express');
require("./src/helpers/database/database");
const jwt = require("jsonwebtoken");

const userRouter = require("./src/routes/userRouter")

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
    console.log(req.headers);
    res.status(200).send(req.headers.toString())
})

app.use(userRouter);

function token() {
    const va = jwt.sign("my first token", "sequiret")
    console.log(va)
    const verify = jwt.verify(va, "sequiret")
    console.log(verify)
}

token()

app.listen(port, () => {
    console.log(`app is running in port ${port}`)
})
