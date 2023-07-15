//MODEL VENDA

const mongoose = require('mongoose');

const { Schema } = mongoose;

const saleSchema = new Schema(
    {
        order: {
            type: Schema.Types.ObjectId,
            ref: 'Order',
            required: true
        },
        data: {
            type: Date,
            default: Date.now
        }
    },
);

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;

