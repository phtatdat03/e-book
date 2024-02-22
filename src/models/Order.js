const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
    {
        title: { type: String, require: true },
        author: { type: String, require: true },
        price: { type: String, require: true },
        imgSrc: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Order', Order);
