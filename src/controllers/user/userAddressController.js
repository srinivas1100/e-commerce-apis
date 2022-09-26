const UserAddress = require("../../models/user/addressModel");
const User = require("../../models/userModel");

const postUserAddress = async (req, res) => {
    const address = new UserAddress({
        ...req.body,
        user_id: req.id,
    });
    try {
        await address.save();
        res.status(200).send(address);
    } catch (error) {
        res.status(500).send("server error");
    }
}

const getSingleAddress = async (req, res) => {
    try {
        const address = await UserAddress.findOne({ _id: req.params.id });
        if (!address) return res.status(400).send("adress does not exists");
        await address.populate('user_id');
        res.status(200).send(address);
    } catch (error) {
        console.log(error);
        res.status(500).send("somthing went worng plese try again");
    }
}

const getallUserAddress = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate('address');
        res.status(200).send(user.address);
    } catch (err) {
        console.log(err);
        res.status(500).send("somthing went worng plese try again");
    }
}

const updateAddress = async (req, res) => {
    const addresObject = {};
    req.body.address_line1 === "" ? null : addresObject['address_line1'] = req.body.address_line1;
    req.body.address_line2 === "" ? null : addresObject['address_line2'] = req.body.address_line2;
    req.body.city === "" ? null : addresObject["city"] = req.body.city;
    req.body.state === "" ? null : addresObject["state"] = req.body.state;
    req.body.country === "" ? null : addresObject["country"] = req.body.country;
    req.body.postal_code === "" ? null : addresObject["postal_code"] = req.body.postal_code;
    addresObject["user_id"] = req.body.user_id;
    try {
        const address = await UserAddress.findByIdAndUpdate({ _id: req.params.id }, addresObject);
        console.log(address);
        res.status(200).send(addresObject);
    } catch (error) {
        console.log(error);
        res.status(500).send("somthig wen't worng pls try again");
    }
}

const deleteAddress = async (req, res) => {
    try {
        const address = await UserAddress.deleteOne({ _id: req.params.id });
        res.status(200).send(address);
    } catch (error) {
        console.log(error);
        res.status(500).send("somthig wen't worng pls try again");
    }
}

const deleteAllAddress = async (req, res) => {
    try {
        const address = await UserAddress.deleteMany({ user_id: req.id });
        console.log(address)
        res.status(200).send(address);
    } catch (error) {
        console.log(error);
        res.status(500).send("somthig wen't worng pls try again");
    }
}

module.exports = {
    postUserAddress: postUserAddress,
    getSingleAddress: getSingleAddress,
    getallUserAddress: getallUserAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress,
    deleteAllAddress: deleteAllAddress
}

