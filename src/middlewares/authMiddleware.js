const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    console.log("middleware is running in the app");
    const token = req.headers.authorization.toString().split(" ")
    const ve = jwt.verify(token[1], process.env.JWT_SEC)
    req.params.id = ve._id;
    req.token = token[1];
    next();
}

module.exports = {
    verifyToken: verifyToken
}