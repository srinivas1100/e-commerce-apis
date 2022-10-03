const mongoose = require("mongoose");

const pro_cat_sch = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users"
    },
    name: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const ProductCatogery = mongoose.model("product-catogery", pro_cat_sch);

module.exports = ProductCatogery;