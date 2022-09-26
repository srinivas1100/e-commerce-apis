const mongoose = require("mongoose");

const orderItemsSchema = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
},{
    timestamps: true
});

const orderItems = mongoose.model("order-item", orderItemsSchema);

module.exports = orderItems;