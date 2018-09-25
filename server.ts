// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

const debug = require('debug')('surfer-app-server:server');
const http = require('http');

const config = require('src-server/config');

const logger = require('/src-server/libs/log')(module);


const createError = require('http-errors');
const cookieParser = require('cookie-parser');
// const HttpError = require('/src-server/error/index').HttpError;

import { HttpError } from './src-server/error/index';

const routerDB = require('/src-server/routes');

const errorhandler = require('errorhandler');

const mongoose = require('/src-server/libs/mongoose');
// Faster server renders w/ Prod mode (dev mode never needed)

enableProdMode();

global['Event'] = {};
// Express server
const app = express();

const PORT = config.get('port');
const HOSTNAME =  process.env.NODE_ENV === 'production' ? config.get('hostname') : 'localhost';
const DIST_FOLDER = join(process.cwd(), 'dist');


// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/surfer-app-server/main');
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

logger.debug(`Overriding 'Express' logger`);
app.use( require('morgan')('combined', { 'stream': logger.stream }) );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function (req, res, next) {

  if (process.env.NODE_ENV === 'production') {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://149.129.138.13');
    res.setHeader('Access-Control-Allow-Origin', 'http://www.surf-app.tech');
    // console.log(`HEADERS ---- ${res.getHeader('Access-Control-Allow-Origin')}`);

  } else {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  }
  // console.log(`HEADERS ---- ${res.getHeader('Access-Control-Allow-Origin')}`);
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(require('/src-server/middleware/sendHttpError'));

// TODO: implement data requests securely
app.use('/api', routerDB);

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});


// app.use(router);

app.use(function(err, req, res, next) {
  if (typeof err === 'number') {
    err = new HttpError(err);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') === 'development') {
      app.use(errorhandler(err, req, res, next));
      // var errorHandler = express.errorHandler();
      // errorHandler(err, req, res, next);
    } else {
      logger.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});
// ********************************************************************
// Start up the Node server

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Node server listening on http://${HOSTNAME}:${PORT}`);
  logger.info(`Node server listening on http://${HOSTNAME}:${PORT}`);
});



server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any): number|boolean {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
