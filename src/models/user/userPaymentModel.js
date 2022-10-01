const mongoose = require("mongoose");

const userPaymentSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "cart"
    },
    payment_status: {
        type: Boolean,
        require: true,
        default: false
    },
    total_amount: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});

const userPayments = mongoose.model("user-payments", userPaymentSchema);

module.exports = userPayments;