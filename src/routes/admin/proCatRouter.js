const router = require("express").Router();
const { verifyToken } = require("../../middlewares/authMiddleware");
const { createProductCatogery, getAllCatogerys, getSingleCatogerys, updateProCat, deleteOneProCat, deleteAllProCat } = require("../../controllers/admin/proCatController");

router.post("/pro-cat", verifyToken, createProductCatogery);

router.get("/pro-cat/all", verifyToken, getAllCatogerys);

router.get("/pro-cat/:id", verifyToken, getSingleCatogerys);

router.put("/pro-cat/:id", verifyToken, updateProCat);

router.delete("/pro-cat/delete-all", verifyToken, deleteAllProCat);

router.delete("/pro-cat/:id", verifyToken, deleteOneProCat);


module.exports = router;