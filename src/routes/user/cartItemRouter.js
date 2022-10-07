const express = require("express");
const { verifyToken, getCartDetails } = require("../../middlewares/authMiddleware")
const { addCartItem, getSingleItem, updateCartItem, deleteCartItem } = require("../../controllers/user/cartItemController");

const router = express.Router();

router.post("/cartItem", verifyToken, getCartDetails, addCartItem);

router.get("/cartItem/:id", verifyToken, getSingleItem);

router.put("/cartItem/:id", verifyToken, getCartDetails, updateCartItem);

router.delete("/cartItem/:id", verifyToken, deleteCartItem);

module.exports = router;