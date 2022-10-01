const UserPayment = require("../../models/user/userPaymentModel");
const User = require("../../models/userModel");

const createUserPayment = async (req, res) => {
    var userPaymentObject = {};
    userPaymentObject['user_id'] = req.id;
    userPaymentObject['order_id'] = req.cart_id;
    req.body.payment_status === "" ? false :
        userPaymentObject['payment_status'] = req.body.payment_status;
    req.body.total_amount === "" ? null :
        userPaymentObject['total_amount'] = req.body.total_amount;
    try {
        const payment = new UserPayment(userPaymentObject);
        await payment.save();
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send({
            "message": "somthing went wrong pls try again after some time"
        })
    }
}

const getAllPayments = async (req, res) => {
    try {
        const user = await User.findById(req.id);
        await user.populate('payments');
        res.status(200).send(user.payments);
    } catch (error) {
        res.status(500).send({
            "message": "somthing went wrong pls try again after some time",
            "error": error.toString()
        })
    }
}


const getSinglePaymentDetails = async (req, res) => {

    try {
        const payment = await UserPayment.findById(req.params.id);
        res.status(200).send(payment);
    } catch (error) {
        res.status(500).send({
            "message": "somthing went wrong pls try again after some time",
            "error": error.toString()
        })
    }
}

const updateUserPayment = async (req, res) => {
    var userPaymentObject = {};
    req.body.payment_status === "" ? null :
        userPaymentObject['payment_status'] = req.body.payment_status;
    req.body.total_amount === "" ? null :
        userPaymentObject['total_amount'] = req.body.total_amount;
    try {
        const updatePayment = await UserPayment.findByIdAndUpdate({ _id: req.params.id }, userPaymentObject);
        res.status(200).send(updatePayment);
    } catch (error) {
        res.status(500).send({
            "message": "somthing went wrong pls try again after some time",
            "error": error.toString()
        })
    }
}

module.exports = {
    createUserPayment: createUserPayment,
    getSinglePaymentDetails: getSinglePaymentDetails,
    updateUserPayment: updateUserPayment
}