const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "cart"
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "product"
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    }
}, {
    timestamps: true
});

const CartItem = mongoose.model("cartitem", cartItemSchema);

module.exports = CartItem;