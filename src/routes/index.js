const router = require('express').Router();
const health = require('./health');
const order = require('./order');
const orderStatus = require('./orderStatus');

router.use('/health', health);
router.use('/order', order);
router.use('/orderStatus',orderStatus);


module.exports = router;