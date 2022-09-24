const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    address_line1: {
        type: String,
        require: true
    },
    address_line2: {
        type: String
    }, 
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    postal_code: {
        type: Number,
        require: true
    }
});

const userAddress = mongoose.model("user-address", addressSchema);

module.exports = userAddress;