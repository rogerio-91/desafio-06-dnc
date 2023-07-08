//MODEL CLIENTE

const mongoose = require('mongoose');

const { Schema } = mongoose; 

const clientSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
},
    {timestamps: true}
);

const Client = mongoose.model("Client", clientSchema);

module.exports = {
    Client,
    clientSchema
}

