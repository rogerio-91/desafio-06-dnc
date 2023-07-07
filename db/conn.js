const mongoose = require('mongoose');

async function main () {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect("mongodb+srv://rogerio:9MFU59tb77gA3h17@cluster0.n1rvfsi.mongodb.net/?retryWrites=true&w=majority")
        console.log('Database connected!');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;