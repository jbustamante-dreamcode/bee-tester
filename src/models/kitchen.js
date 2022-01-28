const {queueProvider} = require('../lib');


const cookQueue = queueProvider.createQueue('cook');
const serveQueue = queueProvider.createQueue('serve');

cookQueue.process(3, (job, done) => {
    setTimeout(() => console.log("Getting the ingredients ready 🥬 🧄 🧅 🍄"), 1000);
    setTimeout(() => console.log(`🍳 Preparing ${job.data.dish}`), 1500);
    setTimeout(() => {
        console.log(`🧾 Order ${job.data.orderNo}: ${job.data.dish} ready`);
        done();
    }, job.data.qty * 1000);
});

cookQueue.on('succeeded', (job, result) => {
    queueProvider.createJob(serveQueue, job.data);
});