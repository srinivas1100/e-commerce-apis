const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    quantity: {
        type: Number,
        require:true,
        default: 1
    }
}, {
    timestamps: true
});

const cartItem = mongoose.model("cartitem", cartItemSchema);

module.exports = cartItem;