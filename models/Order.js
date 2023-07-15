// MODEL PEDIDO

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    stock: {
        type: Schema.Types.ObjectId,
        ref:'Stock',
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
