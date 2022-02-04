const redis= require('redis');

dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS
};


function createClient() {
    const client = redis.createClient(dbOptions);
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    return client;
   
}


async function hSet(id, property, value) {
    const client = createClient();
  
    await client.connect();
  
    let response= await client.hSet(id, property, value);
    console.log(response);
    return response;  
}

async function hGet(id, property) {
    const client = createClient();
  
    await client.connect();
  
    let response= await client.hGet(id, property);
    console.log(response);
    return response;  
}


module.exports ={dbOptions, hSet, hGet};