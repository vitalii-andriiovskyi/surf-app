const mongoose = require('mongoose');

import { Connect } from 'mongoose';
import nconf from '../config';
const config = nconf;
// const config = require('/src-server/config');

mongoose
  .connect(process.env.MONGO_DB_URI, config.get('mongoose:options'))
  .catch(err => console.log('mongoose connection error: ', err));
mongoose.set('useCreateIndex', true);
export default mongoose;
