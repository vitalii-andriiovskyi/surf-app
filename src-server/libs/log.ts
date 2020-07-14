import { join } from 'path';
const { createLogger, format, transports } = require('winston');
const { combine, colorize, label, json, timestamp, printf } = format;
require('winston-daily-rotate-file');
const fs = require('fs');

const ENV = process.env.NODE_ENV;
const logDir = join(__dirname, 'logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: 'YYYY-MM-DD'
});

// can be much flexible than O_o
function getLogger(filename) {
  let path = '';
  if (filename) {
    path = filename.split('\\').slice(-2).join('/');
  }

  const logger = createLogger({
    transports: [
      new transports.Console({
        level: ENV === 'development' ? 'debug' : 'error',
        format: combine(
          colorize(),
          label({label: path}),
          timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          printf(
            // We display the label text between square brackets using ${info.label} on the next line
            info => `${info.timestamp} ${info.level}: [${info.label}] ${info.name}: ${info.message || info.errmsg}`
          )
        )
      }),
      dailyRotateFileTransport
      // new transports.File({
      //   level: 'info',
      //   filename: './logs/all-logs.log',
      //   // handleExceptions: true,
      //   maxsize: 5242880, // 5MB
      //   maxFiles: 5,
      //   format: json(),
      // }),
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
export default getLogger;
