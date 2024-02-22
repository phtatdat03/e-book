const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/Sell_Book')
            .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Connect failed!');
    }
}

module.exports = { connect };