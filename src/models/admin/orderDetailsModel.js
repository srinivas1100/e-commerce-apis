const mongoose = require("mongoose");

const orderDetailsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }, 
    total_amount: {
        type: Number,
        require: true
    }, 
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
},{
    timestamps: true
});

const orderDetails = mongoose.model("order-details", orderDetailsSchema);

module.exports = orderDetails;