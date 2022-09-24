const { DocumentBuilder } = require("firebase-functions/v1/firestore");
const mongoose = require("mongoose");

const productSchma = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    name: {
        type : String,
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
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    catagery_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }

},{
    timestamps: true
});

const product = mongoose.model("product", productSchma);

module.exports = product;