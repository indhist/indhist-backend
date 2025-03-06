const winston = require('winston');
const { sendErrorToDiscord } = require('./discord');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});

const customLevels = {
  levels: {
    critical: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
  },
  colors: {
    critical: 'red',
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
  }
};

const logger = winston.createLogger({
  levels: customLevels.levels,
  level: 'info',
    format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'indhist' },
  transports: [
    transport,
    new winston.transports.Console({colorize: true}) // Optional: Logs to console
    ],
   exceptionHandlers: [
    (error) => {
      sendErrorToDiscord(error);
    }
  ]
});

module.exports = logger;
