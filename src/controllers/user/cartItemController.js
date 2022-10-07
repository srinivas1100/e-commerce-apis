const CartItem = require("../../models/user/cartItem");


const addCartItem = async (req, res) => {
    const cartItemObject = {};
    cartItemObject['user_id'] = req.id;
    cartItemObject['cart_id'] = req.cart_id;
    cartItemObject['product_id'] = req.body.product_id;
    req.body.quantity === "" ? cartItemObject['quantity'] = 1 :
        cartItemObject['quantity'] = req.body.quantity;
    try {
        const cartItem = new CartItem(cartItemObject);
        cartItem.save();
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

const getSingleItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findById(req.params.id);
        await cartItem.populate("product_id");
        await cartItem.populate("product_id.discount_id");
        await cartItem.populate("user_id");
        await cartItem.populate("cart_id");
        return res.status(200).send({
            "name": cartItem.user_id.name,
            "email": cartItem.user_id.email,
            "pro_name": cartItem.product_id.name,
            "pro_des": cartItem.product_id.description,
            "pro_price": cartItem.product_id.price,
            "quantity": cartItem.quantity,
            "dis_name": cartItem.product_id.discount_id.name,
            "dis_per": cartItem.product_id.discount_id.discount_per,
            "dis_description": cartItem.product_id.discount_id.description,
            "total": cartItem.product_id.price * cartItem.quantity,
            "dis_total": (cartItem.product_id.price * cartItem.quantity) - (((cartItem.product_id.price * cartItem.product_id.discount_id.discount_per) / 100) * cartItem.quantity),
        });
    } catch (error) {
        res.status(500).send({ "message": "somthing went wrong pls try again", "Error": error.toString() });
    }
}


const updateCartItem = async (req, res) => {
    const cartItemObject = {};
    cartItemObject['user_id'] = req.id;
    cartItemObject['cart_id'] = req.cart_id;
    cartItemObject['product_id'] = req.body.product_id;
    req.body.quantity === "" ? cartItemObject['quantity'] = 1 :
        cartItemObject['quantity'] = req.body.quantity;

    try {
        const cartItem = await CartItem.findByIdAndUpdate({ _id: req.params.id }, cartItemObject);
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.deleteOne({ _id: req.params.id });
        res.status(200).send(cartItem);
    } catch (error) {
        res.status(500).send("somthing went wrong pls try again");
    }
}

module.exports = {
    addCartItem: addCartItem,
    getSingleItem: getSingleItem,
    updateCartItem: updateCartItem,
    deleteCartItem: deleteCartItem
}