const Stock = require('../models/Stock');

// Obter a lista de produtos no Estoque

exports.getStock = async (req, res) => {
    try {
        const stocks = await Stock.find()
            .populate('product');
        res.json(stocks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a lista de produtos' });
    }
};

// Obter um produto no Estoque pelo ID

exports.getStockById = async (req, res) => {
    const { id } = req.params;
    try {
        const stock = await Stock.findById(id)
            .populate('product');
        if (!stock) {
            return res.status(404).json({ message: 'Estoque não encontrado, verifique os dados!' })
        }
        res.json(stock);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao encontrar estoque, verifique os dados!' })
    }
};

// Criar um novo estoque de produtos

exports.createStock = async (req, res) => {
    try {
        const { product, quantity } = req.body;
        const stock = new Stock({ product, quantity });
        const savedStock = await stock.save();
        res.status(201).json(savedStock);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao inserir estoque, verifique os dados!' })
    }
};

// Atualizar estoque 

exports.updateStock = async (req, res) => {
    const { id } = req.params;
    const { product, quantity } = req.body;
    try {
        const stock = await Stock.findByIdAndUpdate(id, { product, quantity }, { new: true });
        if (!stock) {
            return res.status(404).json({ message: 'Estoque não encontrado' })
        }
        res.json(stock);
    } catch (error) {
        res.status(500).json({ messagem: 'Erro ao atualizar produto no estoque, verifique os dados!' })
    }
};

// Deletar estoque 

exports.deleteStock = async (req, res) => {
    const { id } = req.params;
    try {
        const stock = await Stock.findByIdAndDelete(id);
        if (!stock) {
            return res.status(404).json({ message: 'Estoque não encontrado' })
        }
        res.json({ message: 'Estoque excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o estoque, verifique os dados' })
    }

};
