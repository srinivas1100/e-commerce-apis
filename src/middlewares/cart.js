const Cart = require("../models/user/cartModel");

const createCart = async (req, res, next) => {
    try {
        const cart = new Cart({ user_id: req.id })
    } catch (error) {
        res.status(404).send({
            "meesage": "somthing went wrong wile createing cart",
            "Error": error.toString()
        })
    }
}

module.exports = createCart;