import { Logger } from 'winston';
const winston = require('winston');

const ENV = process.env.NODE_ENV;

// can be much flexible than O_o
function getLogger(module) {
  let path = '';
  if (module.filename) {
    path = module.filename.split('\\').slice(-2).join('/');
  }

  const logger = new winston.Logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: ENV === 'development' ? 'debug' : 'error',
        label: path
      }),
      new winston.transports.File({
        level: 'info',
        filename: './logs/all-logs.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false
      }),
    ],
    exitOnError: false
  });

  logger.stream = {
    write: function (message, encoding) {
      logger.info(message);
    }
  };

  return logger;
}

module.exports = getLogger;
