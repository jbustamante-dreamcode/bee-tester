const {waiter}= require('../models');

function newOrder(req, res){
    let order = {
        dish: req.body.dish,
        qty: req.body.qty,
        orderNo: Date.now().toString(36)
    }
    if (order.dish && order.qty) {
        waiter.placeOrder(order)
            .then(() => res.json({ done: true, message: "Your order will be ready in a while" , orderId: order.orderNo}))
            .catch(() => res.json({ done: false, message: "Your order could not be placed" }));
    }else {
        res.status(422);
    }
    /*res.status(200).json({
        messages:`ORDER: ${waiter.hello()} ${order.qty} orders of ${order.dish} will be prepared soon`,
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage()
    })*/

}

module.exports = {newOrder};