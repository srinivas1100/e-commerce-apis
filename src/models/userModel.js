const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");

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
        // validate (a) {
        //     if(!validator.isEmail(a)){
        //         throw new Error("Email is invalid");
        //     }
        // }
    },
    password: {
        type: String,
        require: true,
        trim: true,
        // validate (a) {
        //     if(validator.isPassword(a)){
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
})

userSchema.methods.generateToken = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id.toString() }, process.env.JWT_SEC);
    user.tokens = user.tokens.concat({token: token});
    await user.save();
    console.log(user._id)
    return token;
}


const User = mongoose.model("users", userSchema);

module.exports = User;