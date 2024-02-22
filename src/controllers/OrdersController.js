const Order = require('../models/Order');

class OrdersController {
    // [GET] /order/get
    async get(req, res) {
        const orders = await Order.find({});
        res.send(orders)
    }

    //[POST] /order/save
    saveOrder(req, res) {
        Order.create(req.body)
            .then(order => res.json(order))
            .catch(err => res.json(err))
    }

    //[DELETE] /order/delete/:id
    deleteOrder(req, res) {
        const id = req.params.id;

        Order.findByIdAndDelete({_id: id})
            .then(orders => res.json(orders))
            .catch(err => res.json(err))
    }
}

module.exports = new OrdersController();