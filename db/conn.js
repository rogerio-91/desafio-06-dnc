require('dotenv').config();
const mongoose = require('mongoose');

async function main () {
    mongoose.set('strictQuery', true);

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connected!');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
