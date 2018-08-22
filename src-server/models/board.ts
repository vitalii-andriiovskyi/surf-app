const mongoose = require('/src-server/libs/mongoose'),
  Schema = mongoose.Schema;

import { HttpError } from '../error';

const Dimention = new Schema({
  size: { type: String },
  width: { type: String },
  thickness: { type: String },
  volume: { type: String }
});


const BoardImage = new Schema({
  bigImage: {
    type: String,
    required: true
  },
  smallImage: {
    type: String,
    required: true
  },
  alt: { type: String }
});


const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  votingStarsRange: {
    type: String
  },
  votingStarsNumber: {
    type: Number
  },
  tabset1: {
    tabseId: {
      type: String,
      required: true
    },
    description: { type: String },
    features: { type: String },
    dimentions: [ Dimention ]
  },
  tabset2: {
    tabseId: { type: String, required: true },
    images: [ BoardImage ],
  },
  price: {
    type: String
  }
 });

module.exports.Board = mongoose.model('Board', schema);
