import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import * as bodyParser from 'body-parser';

import './Controllers/mail.controller'

import bootstrapper from '../Infra/CrossCutting/BootStrapper';

if (process.env.NODE_ENV === 'development') {
  let logger = makeLoggerMiddleware();
  bootstrapper.applyMiddleware(logger);
}

let server = new InversifyExpressServer(bootstrapper);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();

export default app;