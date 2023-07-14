const Order = require ('../models/Order'); 

// Obter a lista dos Pedidos 

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a lista de pedidos' });
    }
};

// Obter um pedido pelo Id 

exports.getClientById = async (req, res) => {
    const { id } = req.params; 
    try {
        const order = await Order.findById(id);
        if(!order){
        return res.status(404).json({message: 'Pedido não encontrado!'})
        }
     res.json(order);   
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o pedido do cliente' });

    }
};

// Criação de um novo pedido

exports.createOrder = async (req, res) => {
    try {
        const {client, product, stock} = req.body;
        const order = new Order ({ client, product, stock});
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar, insira todos os campos solictados!' });
    }
};

// Atualizar pedido 

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const {client, product, stock} = req.body;
    try {
        const order = await Order.findByIdAndUpdate(id,{ client, product, stock}, {new: ture});
        if(!order){
        return res.status(404).json({message: 'Pedido não encontrado'})
        }
        res.status(order);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o pedido do cliente, verifique os dados!' });
    }
};

// Excluir um cliente

exports.deleteOrder = async ( req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        if(!order){
            return res.status(404).json({message: 'Pedido não encontrado'})
        }
        res.json({message: 'Pedido excluido com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o pedido do cliente, verifique os dados!'});
    }

}