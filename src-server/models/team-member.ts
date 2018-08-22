const mongoose = require('/src-server/libs/mongoose'),
  Schema = mongoose.Schema;

import { HttpError } from '../error';

const schema = new Schema({
  id:          { type: String, required: true },
  firstname:   { type: String, required: true },
  surname:     { type: String },
  accountName: { type: String, required: true },
  accountLink: { type: String, required: true },
  address:     { type: String, required: true },
  srcLink:     { type: String, required: true },

});

module.exports.TeamMember = mongoose.model('TeamMember', schema);
