const orderStatus= require('../models/orderStatus.model');


async function status(req, res){
    res.status(200).json(await orderStatus.getOrderStatus(req.query.orderId));
}


module.exports = {status};