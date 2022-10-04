const router = require("express").Router();
const { verifyToken } = require("../../middlewares/authMiddleware");
const { postProduct, getProductDetails, allProducts, updateProduct, deleteProduct, deleteAllProducts, getProductPayments } = require("../../controllers/admin/productController");

router.post("/products", verifyToken, postProduct);

router.get("/products/all-pro", verifyToken, allProducts);

router.get("/products/:id", verifyToken, getProductDetails);

router.put("/products/:id", verifyToken, updateProduct);

router.delete("/products/all-pro", verifyToken, deleteAllProducts);

router.delete("/products/:id", verifyToken, deleteProduct);

router.get("/products/payments/:id", verifyToken, getProductPayments);

module.exports = router;