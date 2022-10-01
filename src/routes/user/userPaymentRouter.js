const expreess = require("express");
const { createUserPayment, getSinglePaymentDetails, updateUserPayment } = require("../../controllers/user/userPayments");
const { verifyToken, getCartDetails } = require("../../middlewares/authMiddleware");

const router = expreess.Router();

router.post('/user-payment', verifyToken, getCartDetails, createUserPayment)
router.get('/user-payment/:id', verifyToken, getCartDetails, getSinglePaymentDetails)
router.get('/user-payment/:id', verifyToken, getCartDetails, updateUserPayment)

module.exports = router;