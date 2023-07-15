const { Order } = require('../models/Order');

// Obter a lista dos Pedidos 

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('sale')
            .populate('product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a lista de pedidos' });
    }
};

// Obter um pedido pelo Id 

exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id)
            .populate('sale')
            .populate('product');
        if (!order) {
            return res.status(404).json({ message: 'Pedido não encontrado!' })
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o pedido do cliente' });

    }
};

// Criação de um novo pedido

exports.createOrder = async (req, res) => {
    try {
        const { sale, product, quantity } = req.body;
        const order = new Order({ sale, product, quantity });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar, insira todos os campos solictados!' });
    }
};

// Atualizar pedido 

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { sale, product, quantity } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(id, { sale, product, quantity }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Pedido não encontrado' })
        }
        res.status(order);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o pedido do cliente, verifique os dados!' });
    }
};

// Excluir um pedido

exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Pedido não encontrado' })
        }
        res.json({ message: 'Pedido excluido com sucesso!' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o pedido do cliente, verifique os dados!' });
    }
};