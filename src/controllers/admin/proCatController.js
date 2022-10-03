const ProductCatogery = require("../../models/admin/productCatogeryModel");
const User = require("../../models/userModel");

const createProductCatogery = async (req, res) => {
    const catPro = {};
    catPro['admin_id'] = req.id;
    catPro['name'] = req.body.name;
    try {
        const cat = new ProductCatogery(catPro);
        await cat.save();
        return res.status(200).send(cat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const getAllCatogerys = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate("getAllUserCat");
        return res.status(200).send(user.getAllUserCat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const getSingleCatogerys = async (req, res) => {
    try {
        const proCat = await ProductCatogery.findById(req.params.id);
        return res.status(200).send(proCat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const updateProCat = async (req, res) => {
    const catPro = {};
    catPro['admin_id'] = req.id;
    catPro['name'] = req.body.name;
    try {
        const proCat = await ProductCatogery.findByIdAndUpdate({ _id: req.params.id }, catPro);
        return res.status(200).send(proCat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const deleteOneProCat = async (req, res) => {
    try {
        const proCat = await ProductCatogery.deleteOne({ _id: req.params.id });
        return res.status(200).send(proCat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const deleteAllProCat = async (req, res) => {
    try {
        const proCat = await ProductCatogery.deleteMany({ admin_id: req.id });
        return res.status(200).send(proCat);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

module.exports = {
    createProductCatogery: createProductCatogery,
    getAllCatogerys: getAllCatogerys,
    getSingleCatogerys: getSingleCatogerys,
    updateProCat: updateProCat,
    deleteOneProCat: deleteOneProCat,
    deleteAllProCat: deleteAllProCat
}