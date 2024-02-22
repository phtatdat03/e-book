const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        title: { type: String, require: true },
        author: { type: String, require: true },
        price: { type: String, require: true },
        quantity: { type: String},
        publisher: { type: String},
        imgSrc: { type: String, require: true },
        length: { type: String},
        description: { type: String},
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Book', Book);
