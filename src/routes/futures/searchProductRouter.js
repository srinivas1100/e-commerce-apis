const router = require("express").Router();
const { searchProduct } = require("../../helpers/product-search");
const { verifyToken } = require("../../middlewares/authMiddleware");

router.get("/search-product/:name", verifyToken, searchProduct);

module.exports = router;