require('dotenv').config();
const { server, app } = require('./server/server.config');
require('./server/db.config');

const main = async () => {
    await server.listen(4050);
    console.log('Server on port ', app.get('port'));
}

main();