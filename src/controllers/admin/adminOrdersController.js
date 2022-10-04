const Orders = require("../../models/admin/orderDetailsModel");
const User = require("../../models/userModel");

// const getAllOrders = async (req, res) => {
//     try {
//         const user = await User.findById(req.id);
//         await user.populate("adminOrders");
//         return res.status(200).send(user.adminOrders);
//     } catch (error) {
//         return res.status(500).send({
//             "message": "somthing went wrong pls try again",
//             "Error": error.toString()
//         });
//     }
// }

// const getSingleOrder = async (req, res) => {
//     try {
//         const order = await Orders.findById(res.params.id);
//         await order.populate("users")
//         return res.status(200).send(order);
//     } catch (error) {
//         return res.status(500).send({
//             "message": "somthing went wrong pls try again",
//             "Error": error.toString()
//         });
//     }
// }

const getAllAdminPayments = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate("adminPayments");
        return res.status(200).send(user.adminPayments);
    } catch (error) {
        return res.status(500).send({
            "message": "somthing went wrong pls try again",
            "Error": error.toString()
        });
    }
}


module.exports = {
    // getAllOrders: getAllOrders,
    // getSingleOrder: getSingleOrder,
    getAllAdminPayments: getAllAdminPayments
};