const Product = require("../models/admin/productModel");

const searchProduct = async (req, res) => {
    try {
        const products = await Product.find({ $text: { $search: req.params.name } });
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({
            "meessage": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

module.exports = {
    searchProduct: searchProduct
}