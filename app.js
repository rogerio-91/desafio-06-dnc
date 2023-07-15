const express = require('express');
const app = express();

app.use(express.json());

// DB Connection
const conn = require('./db/conn');
conn();

// Importação das rotas
const productRoutes = require('./routes/productRoutes');
const clientRoutes = require('./routes/clientRoutes');
const stockRoutes = require('./routes/stockRoutes');
const orderRoutes = require('./routes/orderRoutes');
const saleRoutes = require('./routes/saleRoutes');

// Definição das rotas da aplicação
app.use('/api', productRoutes);
app.use('/api', clientRoutes);
app.use('/api', stockRoutes);
app.use('/api', orderRoutes);
app.use('/api', saleRoutes);


//Server Connection
app.listen(3000, () => {
  console.log("Server running!")
});

