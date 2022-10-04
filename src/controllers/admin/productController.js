const Product = require("../../models/admin/productModel");
const User = require("../../models/userModel");
const Payment = require("../../models/user/userPaymentModel");

const postProduct = async (req, res) => {
    const productObject = {};
    productObject["admin_id"] = req.id;
    productObject["name"] = req.body.name;
    productObject["description"] = req.body.description;
    productObject["price"] = req.body.price;
    productObject["quantity"] = req.body.quantity;
    productObject["discount_id"] = req.body.discount_id;
    productObject["catagery_id"] = req.body.catagery_id;
    try {
        const product = new Product(productObject);
        await product.save();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const allProducts = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate("adminProducts");
        return res.status(200).send(user.adminProducts);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const getProductDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const updateProduct = async (req, res) => {
    const productObject = {};
    productObject["admin_id"] = req.id;
    productObject["name"] = req.body.name;
    productObject["description"] = req.body.description;
    productObject["price"] = req.body.price;
    productObject["quantity"] = req.body.quantity;
    productObject["discount_id"] = req.body.discount_id;
    productObject["catagery_id"] = req.body.catagery_id;
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params.id }, productObject);
        res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id });
        res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const deleteAllProducts = async (req, res) => {
    try {
        const product = await Product.deleteMany({ admin_id: req.id });
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

const getProductPayments = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        await product.populate("userPayments");
        return res.status(200).send(product.userPayments)
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}

module.exports = {
    postProduct: postProduct,
    allProducts: allProducts,
    getProductDetails: getProductDetails,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    deleteAllProducts: deleteAllProducts,
    getProductPayments: getProductPayments
}