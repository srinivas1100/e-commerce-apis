const mongoose = require("mongoose");
const validator = require("validator");
const { hashPassword, verifyPassword } = require("../helpers/bcrypt-helpers");
const { generateJwtToken } = require("../helpers/jwt-helpers");
const UserAddress = require("./user/addressModel");
const Cart = require("./user/cartModel");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        validate(a) {
            if (!validator.isEmail(a)) {
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        // validate(a) {
        //     if (validator.isPassword(a)) {
        //         throw new Error("Password is in sufficient");
        //     }
        // }
    },
    usertype: {
        type: String,
        default: "user",
    },
    tokens: [
        {
            token: {
                type: String,
                require: true

            }
        }
    ]
});

userSchema.statics.findByCredentials = async (email, password, next) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("user does not exists pls sign up");
    }
    const ismatch = await verifyPassword(password, user.password);
    if (!ismatch) {
        throw new Error("doesn't match password");
    }
    return user;
}

userSchema.virtual('address', {
    ref: "user-address",
    localField: "_id",
    foreignField: "user_id"
})

userSchema.virtual('payments', {
    ref: "user-payments",
    localField: "_id",
    foreignField: "user_id",
})

userSchema.virtual("getAllUserCat", {
    ref: "product-catogery",
    localField: "_id",
    foreignField: "admin_id"
})

userSchema.virtual("productDis", {
    ref: "discount",
    localField: "_id",
    foreignField: "admin_id"
});

userSchema.virtual('adminProducts', {
    ref: "product",
    localField: "_id",
    foreignField: "admin_id"
})

userSchema.virtual('adminOrders', {
    ref: "order-details",
    localField: "_id",
    foreignField: "user_id"
})

userSchema.virtual('adminPayments', {
    ref: "user-payments",
    localField: "_id",
    foreignField: "admin_id"
})

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await hashPassword(user.password);
    }
    next();
})

userSchema.pre("deleteOne", { document: true }, async function (next) {
    const user = this;
    const a = await UserAddress.find({ user_id: user._id });
    await UserAddress.deleteMany({ user_id: user._id });
    next();
});

userSchema.pre("save", async function (req, res, next) {
    const user = this;
    try {
        const cart = new Cart({ user_id: user._id });
        await cart.save();
        req.cart_id = cart._id;
        next();
    } catch (error) {
        res.status(403).send("somthing went wrong wile createing a cart");
    }
});

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = await generateJwtToken(user._id.toString());
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
}

const User = mongoose.model("users", userSchema);

module.exports = User;