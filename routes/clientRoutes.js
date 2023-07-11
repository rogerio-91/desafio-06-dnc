// Rota de Clientes 

const express = require('express');
const router = express.Router();

// Controller de Clientes 
const clientController = require('../controllers/clientController')

// Rotas para CRUD de Clientes

router.get('/clients', clientController.getClients);
router.get('/clients/:id', clientController.getClientById);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

module.exports = router;