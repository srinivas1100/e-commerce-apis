const Discount = require("../../models/admin/discountModel");
const User = require("../../models/userModel");

const crateDiscount = async (req, res) => {
    const discountObject = {}
    discountObject['admin_id'] = req.id;
    if (req.body.name === undefined) return res.status(400).send({
        "message": "name is required"
    });
    discountObject["name"] = req.body.name;
    discountObject["description"] = req.body.description;
    discountObject["discount_per"] = req.body.discount_per;
    discountObject["active"] = req.body.active;

    try {
        const disc = new Discount(discountObject);
        await disc.save();
        return res.status(200).send(disc);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

const getAllDiscounts = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate("productDis");
        return res.status(200).send(user.productDis);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}
const getSingleDiscount = async (req, res) => {
    try {
        const disc = await Discount.findById(req.params.id);
        await disc.populate("admin_id");
        return res.status(200).send(disc);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}
const updateDiscount = async (req, res) => {
    const discountObject = {}
    discountObject['discountObject'] = req.id;
    if (req.body.name === undefined) return res.status(400).send({
        "message": "name is required"
    });
    discountObject["name"] = req.body.name;
    discountObject["description"] = req.body.description;
    discountObject["discount_per"] = req.body.discount_per;
    discountObject["active"] = req.body.active;
    try {
        const disc = await Discount.findByIdAndUpdate({ _id: req.params.id }, discountObject);
        return res.status(200).send(disc);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}
const deleteDiscount = async (req, res) => {
    try {
        const disc = await Discount.deleteOne({ _id: req.params.id });
        return res.status(200).send(disc);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}
const deleteAllDiscount = async (req, res) => {
    try {
        const disc = await Discount.deleteMany({ admin_id: req.id });
        return res.status(200).send(disc);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        })
    }
}

module.exports = {
    crateDiscount: crateDiscount,
    getAllDiscounts: getAllDiscounts,
    getSingleDiscount: getSingleDiscount,
    updateDiscount: updateDiscount,
    deleteDiscount: deleteDiscount,
    deleteAllDiscount: deleteAllDiscount
}