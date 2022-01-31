const {hSet, hGet}=require('../lib/dbProvider');



async function getOrderStatus(orderId) {
    let result = await hGet(`order:${orderId}`, 'status');
    return result;

    
}

async function updateOrderStatus(orderId, status) {
    let result = await hSet(`order:${orderId}`, 'status', status);
    return result;

    
}



module.exports={getOrderStatus, updateOrderStatus};