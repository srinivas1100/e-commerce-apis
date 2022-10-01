const { request } = require("express");
const User = require("../models/userModel.js");
const { hashPassword } = require("../helpers/bcrypt-helpers.js")

const getAllUsers = async (req, res) => {
    const user = await User.find();
    if (!user) return res.status(300).send("some error id comming");
    res.status(200).send(user);
}

const loginUser = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);

        await user.generateToken();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("server error");
    }
}

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        if (!user) return res.status(400).send("User does not exist");
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.toString())
    }

}

const insertUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const saveUser = await user.save();
        res.status(200).send(saveUser);
    } catch (err) {
        res.status(500).send("server error");
    }


}

const updateUser = async (req, res) => {
    try {
        var userObject = {};
        req.body.name === "" ? null : userObject["name"] = req.body.name;
        req.body.email === "" ? null : userObject["email"] = req.body.email;
        req.body.password === "" ? null : userObject["password"] = await hashPassword(req.body.password);
        req.body.usertype === "" ? null : userObject["usertype"] = req.body.usertype;

        await User.findOneAndUpdate({ _id: req.id }, userObject);

        res.status(200).send(userObject)
    } catch (err) {
        console.log(err.toString());
        res.status(500).send("server error");
    }
}

const logoutUser = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.id });
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
        const user = await User.findById({ _id: req.id });
        user.tokens = [];
        user.save();
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send("server error")
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.id });
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("server error")
    }
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

