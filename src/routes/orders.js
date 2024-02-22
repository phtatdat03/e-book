const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/OrdersController');

router.get('/get', ordersController.get);
router.post('/save', ordersController.saveOrder);
router.delete('/delete/:id', ordersController.deleteOrder);

module.exports = router;
