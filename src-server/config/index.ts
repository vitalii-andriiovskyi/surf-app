// import { nconf } from 'nconf';
const nconf = require('nconf');
import { join } from 'path';

// const nconf = require('nconf');
// const path = require('path');
console.log(join(__dirname, '../config.json'));
nconf.argv().env().file({file: join(__dirname, '../config.json')} );

export default nconf;
