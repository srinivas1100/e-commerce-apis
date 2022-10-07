const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    total_items: {
        type: Number,
        require: true,
        default: 0
    },
    total_amount: {
        type: Number,
        require: true,
        default: 0.0,
    }
}, {
    timestamps: true
});

cartSchema.virtual('cartItems', {
    ref: "cartitem",
    localField: "_id",
    foreignField: "cart_id",
})

cartSchema.virtual('payments-or', {
    ref: "user-payments",
    localField: "_id",
    foreignField: "cart_id",
})

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;