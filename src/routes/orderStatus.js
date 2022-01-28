const router = require('express').Router();
const {orderStatusController} = require ('../controllers');

router.route('/').get(orderStatusController.status);

module.exports = router;