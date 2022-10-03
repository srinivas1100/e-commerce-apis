const CartItem = require("../../models/user/cartItem");


const addCartItem = async (req, res) => {
    try {
        const cartItem = new CartItem(req.body);
        cartItem.save();
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

const getSingleItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findById(req.id);
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

const updateCartItem = async (req, res) => {
    const itemDetails = {};
    // itemDetails["user_id"] = 
    // itemDetails["quantity"] = 

    try {
        const cartItem = new CartItem(req.body);
        cartItem.save();
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.deleteOne({ _id: req.parems.id });
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

module.exports = {
    getAllItems: getAllItems
}