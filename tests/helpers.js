const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../src/models/userModel");
const UserAddress = require("../src/models/user/addressModel");
const Cart = require("../src/models/user/cartModel");
const UserPayment = require("../src/models/user/userPaymentModel");

const objectId = new mongoose.Types.ObjectId();
const updateId = new mongoose.Types.ObjectId();
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

const updateUser = {
    _id: updateId,
    name: "srinu up",
    email: "SrinuUP@gmail.com",
    password: "12345678",
    usertype: "user",
    tokens: [
        {
            token: jwt.sign({ _id: updateId }, process.env.JWT_SEC),
        },
        {
            token: jwt.sign({ _id: objectIdDummy }, process.env.JWT_SEC),
        }
    ],
}
// address objects
const userAddressId = new mongoose.Types.ObjectId();

const address = {
    _id: userAddressId,
    user_id: objectId,
    address_line1: "12-135, main road",
    address_line2: "pd padu  as",
    city: "ongole",
    state: "andrapadesh",
    country: "india",
    postal_code: 123456
}

const deleteAllFunction = async () => {
    await User.deleteMany();
    await Cart.deleteMany();
    await UserAddress.deleteMany();
    await UserPayment.deleteMany();
    await new User(user1).save();
    await new User(updateUser).save();
    await new UserAddress(address).save();
};

module.exports = {
    objectId: objectId,
    user1: user1,
    updateUser: updateUser,
    userAddressId: userAddressId,
    deleteAllFunction: deleteAllFunction
}
