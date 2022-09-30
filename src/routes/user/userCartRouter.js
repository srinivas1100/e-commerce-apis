const { getUserCart } = require("../../controllers/user/userCartController");
const { verifyToken } = require("../../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

router.get("/cart", verifyToken, getUserCart);



module.exports = router;