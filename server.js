require('dotenv').config();
console.log('node app is now running');
const { DB_HOST, SV_PORT} = process.env;

(async () => {
    try {
        const app = require('./app');
        app.listen(SV_PORT, () => {
            console.log(`Restaurant open at:${SV_PORT}`);
        });

    } catch (error) {
        console.log(error);
    }
})();