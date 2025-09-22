// const express = require('express');
// const router = express.Router();
// const {
//     getProducts,
//     getProductById, // NEW import
//     createProduct,
//     updateProduct,
//     deleteProduct
// } = require('../controllers/productController');

// router.route('/')
//     .get(getProducts)
//     .post(createProduct);

// router.route('/:id')
//     .get(getProductById) // NEW route for single product
//     .put(updateProduct)
//     .delete(deleteProduct);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/productController");

// CRUD + filtering + sorting + pagination
router.get("/", getProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
