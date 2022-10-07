const { DocumentBuilder } = require("firebase-functions/v1/firestore");
const mongoose = require("mongoose");

const productSchma = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "discount"
    },
    catagery_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "product-catogery"
    }

}, {
    timestamps: true
});


productSchma.virtual('adminOrders', {
    ref: "order-details",
    localField: "_id",
    foreignField: "product_id"
})

productSchma.virtual("userPayments", {
    ref: "user-payments",
    localField: "_id",
    foreignField: "product_id"
})

productSchma.virtual("userCartItem", {
    ref: "cartitem",
    localField: "_id",
    foreignField: "product_id"
})

productSchma.index({ name: 'text', description: 'text' });

const Product = mongoose.model("product", productSchma);

module.exports = Product;