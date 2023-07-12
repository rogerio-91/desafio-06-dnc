// Rota de Estoque 

const express = require('express');
const router = express.Router();

// Controller de Estoque 
const stockController = require('../controllers/stockController')

// Rotas para CRUD de Estoque

router.get('/stock', stockController.getStock);
router.get('/stock/:id', stockController.getStockById);
router.post('/stock', stockController.createStock);
router.put('/stock/:id', stockController.updateStock);
router.delete('/stock/:id', stockController.deleteStock);

module.exports = router;