const router = require("express").Router();
const { verifyToken } = require("../../middlewares/authMiddleware");
const { getAllAdminPayments } = require("../../controllers/admin/adminOrdersController");

// router.get("/adminOrders/all", verifyToken, getAllOrders);

router.get("/adminOrders/payments", verifyToken, getAllAdminPayments);

// router.get("/adminOrders/:id", verifyToken, getSingleOrder);


module.exports = router;