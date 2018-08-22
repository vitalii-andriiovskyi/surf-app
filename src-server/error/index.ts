const http = require('http');
import { STATUS_CODES } from 'http';

export class HttpError extends Error {
  status: number;
  message: any;
  constructor(status, message?) {
    // super(arguments);
    super();
    this.status = status;
    this.message = message || http.STATUS_CODES[status] || 'Error';

    // Error.captureStackTrace(this, HttpError);
    Error.captureStackTrace(this, this.constructor);
  }
}
HttpError.prototype.name = 'HttpError';

module.exports.HttpError = HttpError;
