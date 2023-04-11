const router = require("express").Router();
const productController = require("../controllers/productsController")

router.post("/add",productController.addProduct);
router.put("/update/:id",productController.updateProduct);
router.delete("/delete/:id",productController.deleteProduct);
router.get("/products",productController.getAllProducts);

module.exports = router;