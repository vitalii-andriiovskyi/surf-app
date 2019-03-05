import { join } from 'path';
const { createLogger, format, transports } = require('winston');
const { combine, colorize, label, json } = format;

const ENV = process.env.NODE_ENV;

// can be much flexible than O_o
function getLogger(module) {
  let path = '';
  if (module.filename) {
    path = module.filename.split('\\').slice(-2).join('/');
  }

  const logger = createLogger({
    transports: [
      new transports.Console({
        level: ENV === 'development' ? 'debug' : 'error',
        format: combine(
          colorize(),
          label({label: path})
        )
      }),
      new transports.File({
        level: 'info',
        filename: './logs/all-logs.log',
        // handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: json(),
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
