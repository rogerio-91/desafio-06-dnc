const { Client } = require('../models/Client');

// Obter a lista dos Clientes 

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter a lista de clientes' });
    }
}; 

// Obter um cliente pelo ID 

exports.getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client =  await Client.findById(id);
        if(!client){
            return res.status(404).json({ message: 'Cliente não encontrado!' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter o cadastro do cliente' });
    }
};

// Cadastrar um novo cliente 

exports.createClient = async (req, res) => {
    try {
        const{ name, address, email, phone} = req.body;
        const client = new Client({ name, address, email, phone});
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar, insira todos os campos solictados!' });
    }
};

// Atualizar o cadastro do cliente 

exports.updateClient = async (req, res) =>{
    const { id } = req.params;
    const{ name, address, email, phone} = req.body;
    try {
        const client = await Client.findByIdAndUpdate(id,{ name, address, email, phone}, { new: true});
        if(!client){
            return res.status(404).json({ message: 'Cliente não cadastrado!' });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o cadastro do cliente' });
    }
};

// Excluir um cliente

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByIdAndDelete(id);
        if(!client){
            return res.status(404).json({ message: 'Cliente não encontrado'});
        }
        res.json({ message: 'Cadastro de cliente excluido com sucesso'});
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o cadastro do cliente'});
    }
};

