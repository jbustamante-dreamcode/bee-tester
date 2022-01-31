const Queue = require('bee-queue');
const {dbOptions} = require('./dbProvider');

const options = {
    removeOnSuccess: true,
    redis: dbOptions,
}

function createQueue(name) {
    return new Queue(name, options);    
}

function createJob(queue,data) {
    return queue.createJob(data).save();
}


module.exports = {createQueue, createJob};