const Queue = require('bee-queue');
const {queueProvider} = require('../lib');
const {updateOrderStatus} = require('./orderStatus.model')


const cookQueue = queueProvider.createQueue('cook');
const serveQueue = queueProvider.createQueue('serve');


const placeOrder = (order) => {
    updateOrderStatus(order.orderNo, "en preparacion");
    return queueProvider.createJob(cookQueue, order);
};

serveQueue.process((job, done) => {
    updateOrderStatus(job.data.orderNo, "orden lista");
    console.log(`🧾 ${job.data.qty}x ${job.data.dish} ready to be served 😋`);
    done();
})
  




module.exports={placeOrder};

