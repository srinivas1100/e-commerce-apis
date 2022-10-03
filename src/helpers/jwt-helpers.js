const jwt = require("jsonwebtoken");

const generateJwtToken = async (id) => {
    const token = await jwt.sign({ _id: id.toString() }, process.env.JWT_SEC);
    return token;
}

const verifyJwtToken = async (token) => {
    return await jwt.verify(token, process.env.JWT_SEC)
}

module.exports = {
    generateJwtToken: generateJwtToken,
    verifyJwtToken: verifyJwtToken
}