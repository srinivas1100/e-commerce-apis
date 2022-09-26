const express = require("express");
const { getAllUsers, loginUser, insertUser, getSingleUser, updateUser, logoutUser, logoutAllUsers, deleteUser } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user", verifyToken, getAllUsers);

router.get("/user/login", loginUser);

router.get("/user/me", verifyToken, getSingleUser);

router.post("/user", insertUser);

router.put("/user", verifyToken, updateUser);

router.post("/user/logout", verifyToken, logoutUser);

router.post("/user/logoutall", verifyToken, logoutAllUsers);

router.delete("/user", verifyToken, deleteUser);

module.exports = router;