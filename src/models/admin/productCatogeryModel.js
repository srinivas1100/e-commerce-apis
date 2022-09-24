const mongoose = require("mongoose");

const pro_cat_sch = mongoose.Schema({
    admin_id: {
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    name: {
        type: String,
        require: true
    },
    admin_id: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const productCatogery = mongoose.model("product-catogery", pro_cat_sch);

module.exports = productCatogery;