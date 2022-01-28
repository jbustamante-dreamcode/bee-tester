(async () => {
    const client = redis.createClient({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS
    });
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();
  
    const value = await client.hGetAll('USER:1000');
    console.log(value);
  })();