const expreess = require("express");
const { createUserPayment, getAllPayments, getSinglePaymentDetails, updateUserPayment } = require("../../controllers/user/userPayments");
const { verifyToken, getCartDetails } = require("../../middlewares/authMiddleware");

const router = expreess.Router();

router.post('/user-payment', verifyToken, getCartDetails, createUserPayment)

router.get('/user-payment/all', verifyToken, getAllPayments)

router.get('/user-payment/:id', verifyToken, getCartDetails, getSinglePaymentDetails)

router.put('/user-payment/:id', verifyToken, getCartDetails, updateUserPayment)

module.exports = router;