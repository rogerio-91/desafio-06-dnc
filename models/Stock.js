// MODEL ESTOQUE

const mongoose = require('mongoose');

const { Schema } = mongoose;

const stockSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
