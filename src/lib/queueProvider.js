const Queue = require('bee-queue');

const options = {
    removeOnSuccess: true,
    redis: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
    },
}

function createQueue(name) {
    return new Queue(name, options);    
}

function createJob(queue,data) {
    return queue.createJob(data).save();
}


module.exports = {createQueue, createJob};