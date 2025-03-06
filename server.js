const http = require('http');
const app = require('./src/app');
const config = require('./config/config');
const constants = require('./src/constants/constants');
const logger = require('./src/utils/logger');

const server = http.createServer(app);

server.listen(config.port, () => {
  logger.error('Server started');
  logger.info(`${constants.SERVER_START_MESSAGE} ${config.port}`);
});
