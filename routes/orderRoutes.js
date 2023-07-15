// Rota de Pedidos

const express = require('express');
const router = express.Router();

//Controller de Pedidos
const orderController = require('../controllers/orderController');

//Rotas para CRUD de pedidos 

router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;