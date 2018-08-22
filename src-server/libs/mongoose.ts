const mongoose = require('mongoose');

import { Connect } from 'mongoose';
const config = require('/src-server/config');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
module.exports = mongoose;
