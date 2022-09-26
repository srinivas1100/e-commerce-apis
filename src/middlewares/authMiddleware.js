const { verifyJwtToken } = require("../helpers/jwt-helpers");

const verifyToken = async (req, res, next) => {
    if (req.headers.authorization === undefined) return res.status(404).send("plesse authanticate");
    const token = req.headers.authorization.toString().split(" ")
    const ve = await verifyJwtToken(token[1]);
    req.id = ve._id;
    req.token = token[1];
    next();
}

module.exports = {
    verifyToken: verifyToken
}