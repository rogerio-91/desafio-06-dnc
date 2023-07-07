const express = require ('express'); 
const app = express();

app.use(express.json());

// DB Connection
const conn = require('./db/conn');
conn();


app.listen(3000, () => {
    console.log("Server running!")
}); 

