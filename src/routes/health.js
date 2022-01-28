const router = require('express').Router();
const {healthController} = require ('../controllers');

router.route('/').get(healthController.status);
module.exports = router;