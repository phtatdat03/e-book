const booksRouter = require('./books');
const ordersRouter = require('./orders');

function routes(app) {
    
    app.use('/book', booksRouter);
    app.use('/order', ordersRouter);
}

module.exports = routes
