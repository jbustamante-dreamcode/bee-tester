const Queue = require('bee-queue');
const {queueProvider} = require('../lib');


const cookQueue = queueProvider.createQueue('cook');
const serveQueue = queueProvider.createQueue('serve');


const placeOrder = (order) => {
    return queueProvider.createJob(cookQueue, order);
};

serveQueue.process((job, done) => {
    console.log(`🧾 ${job.data.qty}x ${job.data.dish} ready to be served 😋`);
    // Notify the client via push notification, web socket or email etc.
    done();
})
  




module.exports={placeOrder};

