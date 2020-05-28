import mongoose from '../libs/mongoose';
const Schema = mongoose.Schema;

// const HttpError = require('/src-server/error').HttpError;
import { HttpError } from '../error';
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
  author: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  imageSrc: { type: String },
  imageDesc: { type: String }
});

const Post = mongoose.model('Post', schema);
export default Post;
