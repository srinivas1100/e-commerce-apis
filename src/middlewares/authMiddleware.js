const { verifyJwtToken } = require("../helpers/jwt-helpers");
const Cart = require("../models/user/cartModel");

const verifyToken = async (req, res, next) => {
    if (req.headers.authorization === undefined) return res.status(404).send("plesse authanticate");
    const token = req.headers.authorization.toString().split(" ")
    const ve = await verifyJwtToken(token[1]);
    req.id = ve._id;
    req.token = token[1];
    next();
}

const getCartDetails = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ user_id: req.id });
        if (cart === null) return res.status(404).send({
            "message": "user cart is not exist"

        });
        req.cart_id = cart._id;
        next();
    } catch (error) {
        res.status(400).send({
            "message": "somthing went wrong in user cart",
            "error": error.toString()
        })
    }
}

module.exports = {
    verifyToken: verifyToken,
    getCartDetails: getCartDetails
}