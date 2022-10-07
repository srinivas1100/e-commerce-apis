const Cart = require("../../models/user/cartModel");
const CartItem = require("../../models/user/cartItem");
const mongoose = require("mongoose");
const Object = mongoose.Types.ObjectId;

const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user_id: req.id });
        res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went worng pls try again",
            "Error": error.toString()
        })
    }
}

const getAllCartItems = async (req, res) => {
    try {
        const cart = await Cart.aggregate
            // ()
            //     .match({ _id: Object(req.cart_id) })
            //     .lookup({
            //         from: "cartitem",
            //         as: "cart_items",
            //         // let: { "id": { $toObjectId: "$_id" } },
            //         // pipeline: [
            //         //     { $match: { "$expr": [{ "_id": "$$id" }] } },
            //         // ]
            //         localField: "_id",
            //         foreignField: "cart_id"
            //     })
            ([

                // { $match: { "cart_id": req.cart_id } },
                // {
                //     "$project": {
                //         // "_id": {
                //         //     "$toString": "$_id"
                //         // }
                //         // // ,

                //         "product_id": {
                //             "$toString": "$product_id"
                //         }
                //     }
                // },

                {
                    $lookup: {
                        from: "cartitem",
                        as: "pro",
                        localField: "_id",
                        foreignField: "cart_id"
                    }
                },
                // {
                //     $project: {
                //         "_id": 0,
                //         "user_id": 1,
                //         "cart_id": 1,
                //         "product_id": 1,
                //         "quantity": 1,
                //         "pro": 1
                //     }
                // }
            ]);
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went worng pls try again",
            "Error": error.toString()
        })
    }
}

// const getAllCartItems = async (req, res) => {
//     try {
//         const cart = await Cart.findById(req.cart_id);
//         await cart.populate("cartItems");
//         return res.status(200).send(cart.cartItems)
//     } catch (error) {
//         return res.status(500).send({
//             "message": "somthing went worng pls try again",
//             "Error": error.toString()
//         })
//     }
// } 

module.exports = {
    getUserCart: getUserCart,
    getAllCartItems: getAllCartItems
}