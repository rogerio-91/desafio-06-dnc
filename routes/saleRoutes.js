// Rota de Vendas

const express = require('express');
const router = express.Router();

//Controller de Vendas
const saleController = require('../controllers/saleController');

// Rotas para CRUD de Vendas 

router.get('/sales', saleController.getSales);
router.get('/sales/:id', saleController.getSaleById);
router.post('/sales', saleController.createSale);
router.put('/sales/:id', saleController.updateSale);
router.delete('/sales/:id', saleController.deleteSale);

module.exports = router;