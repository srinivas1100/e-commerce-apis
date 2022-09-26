const mongoose = require("mongoose");

const discountSchema = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require: true
    },
    discount_per: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true,
        default: false
    }
}, {
    timestamps: true
});

const discount = mongoose.model("discount", discountSchema);

module.exports = discountSchema;