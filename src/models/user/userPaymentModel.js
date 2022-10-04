const mongoose = require("mongoose");

const userPaymentSchema = mongoose.Schema({
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
    payment_status: {
        type: Boolean,
        require: true,
        default: false
    },
    total_amount: {
        type: Number,
        require: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "product"
    },
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    }
}, {
    timestamps: true
});

userPaymentSchema.virtual('adminOrders', {
    ref: "order-details",
    localField: "_id",
    foreignField: "payment_id"
})

const userPayments = mongoose.model("user-payments", userPaymentSchema);

module.exports = userPayments;