const { getUserCart, getAllCartItems } = require("../../controllers/user/userCartController");
const { verifyToken, getCartDetails } = require("../../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

router.get("/cart", verifyToken, getUserCart);

router.get("/cart/all", verifyToken, getCartDetails, getAllCartItems);

module.exports = router;