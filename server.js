const http = require('http');
const app = require('./src/app');
const config = require('./config/config');
const constants = require('./src/constants/constants');

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`${constants.SERVER_START_MESSAGE} ${config.port}`);
});
