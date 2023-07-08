const mongoose = require('mongoose');

async function main () {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect("mongodb+srv://rogerio:1dNgKSowzc8YvGvY@cluster0.lledoqo.mongodb.net/?retryWrites=true&w=majority")
        console.log('Database connected!');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;