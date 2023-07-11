//Rota de produtos

const express = require('express');
const router = express.Router();

//Controlador de produtos
const productController = require('../controllers/productController');

//Rotas para o CRUD de produtos

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
