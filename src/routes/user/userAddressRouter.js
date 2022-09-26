const express = require("express");
const { verifyToken } = require("../../middlewares/authMiddleware")
const { postUserAddress, getSingleAddress, getallUserAddress, updateAddress, deleteAddress, deleteAllAddress } = require("../../controllers/user/userAddressController")

const router = express.Router();

router.post("/user-address", verifyToken, postUserAddress)

router.get("/user-address", verifyToken, getallUserAddress);

router.get("/user-address/:id", verifyToken, getSingleAddress);

router.put("/user-address/:id", verifyToken, updateAddress);

router.delete("/user-address/delete-all", verifyToken, deleteAllAddress);

router.delete("/user-address/:id", verifyToken, deleteAddress);

module.exports = router;