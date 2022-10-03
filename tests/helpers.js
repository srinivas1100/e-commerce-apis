const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../src/models/userModel");
const Cart = require("../src/models/user/cartModel");
const UserPayment = require("../src/models/user/userPaymentModel");

const objectId = new mongoose.Types.ObjectId();
const objectIdDummy = new mongoose.Types.ObjectId();

const user1 = {
    _id: objectId,
    name: "srinu",
    email: "Srinu@gmail.com",
    password: "12345678",
    usertype: "user",
    tokens: [
        {
            token: jwt.sign({ _id: objectId }, process.env.JWT_SEC),
        },
        {
            token: jwt.sign({ _id: objectIdDummy }, process.env.JWT_SEC),
        }
    ],
};

const deleteAllFunction = async () => {
    await User.deleteMany();
    await Cart.deleteMany();
    await UserPayment.deleteMany();
    await new User(user1).save();
};

module.exports = {
    objectId: objectId,
    user1: user1,
    deleteAllFunction: deleteAllFunction
}
