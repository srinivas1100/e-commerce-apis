const mongoose = require("mongoose");

const orderDetailsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "product"
    },
    quantity: {
        type: Number,
        require: true
    },
    total_amount: {
        type: Number,
        require: true
    },
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user-payments"
    }
}, {
    timestamps: true
});

const orderDetails = mongoose.model("order-details", orderDetailsSchema);

module.exports = orderDetails;