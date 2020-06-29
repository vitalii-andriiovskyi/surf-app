/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

const debug = require('debug')('surfer-app-server:server');
const http = require('http');
const cors = require('cors');

import nconf from './src-server/config';
const config = nconf;

import getLogger from './src-server/libs/log';
const logger = getLogger(module);

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
// const HttpError = require('/src-server/error/index').HttpError;

import HttpError from './src-server/error';
import router from './src-server/routes';

const routerDB = router;

// const errorhandler = require('errorhandler');

import mongoose from './src-server/libs/mongoose';
import sendHttpError from './src-server/middleware/sendHttpError';

import { existsSync, readFileSync } from 'fs';
const domino = require('domino');  // import the library `domino`    (2)

// To deploy the server on Amazon LightSail under the ftpuser, the variable DIST_FOLDER must be '/home/ftpuser/surf-app/dist'
// Otherwise its value will be `/home/ubuntu/dist/browser`, which is incorrect for my case.
// const DIST_FOLDER = process.env.NODE_ENV === 'production' ? '/home/ftpuser/surf-app/dist' : join(process.cwd(), 'dist');
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString(); // use `index.html` as template (3)
const win = domino.createWindow(template); // create object Window                     (4)
global['Event'] = win.Event;               // assign the `win.Event` to prop `Event`   (5)

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  logger.debug(`Overriding 'Express' logger`);
  server.use( require('morgan')('combined', { 'stream': logger.stream }) );

  const whitelist = [
    'http://35.158.177.110',
    'http://localhost:4200',
    'http://localhost:4040',
    'http://127.0.0.1:4040',
    'http://127.0.0.1'
  ];
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error(`${origin} Not allowed by CORS`));
      }
    }
  };

  server.use(cors(corsOptions));

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cookieParser());

  server.use(sendHttpError);

  // TODO: implement data requests securely
  server.use('/api', routerDB);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  // app.use(router);

  server.use(function(err, req, res, next) {
    if (typeof err === 'number') {
      err = new HttpError(err);
    }

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    if (err instanceof HttpError) {
      res.sendHttpError(err);
    } else {
      if (server.get('env') === 'development') {
        // server.use(errorhandler({ log: false}));
        // var errorHandler = express.errorHandler();
        // errorHandler(err, req, res, next);
        logger.error(err);
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

  return server;
}

function run() {
  // const port = process.env.PORT || 4000;
  const PORT = config.get('port');
  const HOSTNAME =  process.env.NODE_ENV === 'production' ? config.get('hostname') : 'localhost';

  // Start up the Node server
  const server = http.createServer(app());
  // const server = app();
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
}



// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
