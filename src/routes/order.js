const router = require('express').Router();
const {orderController} = require ('../controllers');

router.route('/').post(orderController.newOrder);

module.exports = router;