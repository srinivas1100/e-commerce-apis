const Cart = require("../../models/user/cartModel");

const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user_id: req.id });
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send("somthing went worng pls try again")
    }
}

module.exports = {
    getUserCart: getUserCart
}