// MODEL PEDIDO

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    sale: {
        type: Schema.Types.ObjectId,
        ref: 'Sale',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
},
{timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order,
    orderSchema
};
