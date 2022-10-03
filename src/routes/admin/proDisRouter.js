const router = require("express").Router();
const { verifyToken } = require("../../middlewares/authMiddleware");
const { crateDiscount, getSingleDiscount, getAllDiscounts, updateDiscount, deleteDiscount, deleteAllDiscount } = require("../../controllers/admin/proDisController");

router.post("/prodis", verifyToken, crateDiscount);

router.get("/prodis/all", verifyToken, getAllDiscounts);

router.get("/prodis/:id", verifyToken, getSingleDiscount);

router.put("/prodis/:id", verifyToken, updateDiscount);

router.delete("/prodis/all", verifyToken, deleteAllDiscount);

router.delete("/prodis/:id", verifyToken, deleteDiscount);

module.exports = router;