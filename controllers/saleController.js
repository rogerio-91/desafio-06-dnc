const Sale  = require('../models/Sale');

// Obter a lista das Vendas 

exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.find()
            .populate('client');
        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a lista das vendas' })
    }
};

// Obter uma venda pelo Id 

exports.getSaleById = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        if (!sale) {
            return res.status(404).json({ message: 'Venda não encontrada!' })
        }
        res.json(sale);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a venda, verique os dados!' });
    }
};

// Criar uma nova venda 

exports.createSale = async (req, res) => {
    try {
        const { client } = req.body;
        const sale = new Sale({ client });
        const savedSale = await sale.save();
        res.status(201).json(savedSale);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar, insira todos os campos solictados!' });

    }
};

// Atualizar pedido 

exports.updateSale = async (req, res) => {
    const { id } = req.params;
    const { client } = req.body;
    try {
        const sale = await Sale.findByIdAndUpdate(id, { client }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Venda não encontrada' })
        }
        res.status(sale);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a venda, verifque os dados!' });
    }
};

// Excluir uma venda 

exports.deleteSale = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findByIdAndDelete(id);
        if (!sale) {
            return res.status(404).json({ message: 'Venda não encontrada!' })
        }
        res.json({ message: 'Venda excluida com sucesso' })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir a venda, verifique os dados!' });

    }
}