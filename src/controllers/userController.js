const { request } = require("express");
const User = require("../models/userModel.js");

const getAllUsers = async (req, res) => {
    const user = await User.find();
    if (!user) return res.status(300).send("some error id comming");
    res.status(200).send(user);
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        await user.generateToken();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("server error");
    }
}

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).send("User does not exist");
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.toString())
    }

}

const insertUser = async (req, res) => {
    const user = new User(req.body);

    await user.save().then((a) => {
        res.status(200).send(user);
    }).catch((a) => {
        res.status(400).send(a);
    })

}

const updateUser = async (req, res) => {
    var userObject = {};
    req.body.name === "" ? null : userObject["name"] = req.body.name;
    req.body.email === "" ? null : userObject["email"] = req.body.email;
    req.body.password === "" ? null : userObject["password"] = req.body.password;
    req.body.usertype === "" ? null : userObject["usertype"] = req.body.usertype;
    const user = await User.findOneAndUpdate({ _id: req.params.id }, userObject);
    res.status(200).send(userObject)
}

const logoutUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        user.tokens = user.tokens.filter((a) => {
            return a.token !== req.token;
        })
        if (!user) return res.status(400).send("user does not exists");
        user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("server error");
    }

}

const logoutAllUsers = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        user.tokens = [];
        user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send("server error")
    }
}

const deleteUser = async (req, res) => {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(200).send(user);
}

module.exports = { 
    getAllUsers: getAllUsers,
    loginUser: loginUser,
    getSingleUser: getSingleUser,
    insertUser: insertUser,
    updateUser: updateUser,
    logoutUser: logoutUser,
    logoutAllUsers: logoutAllUsers,
    deleteUser: deleteUser
}