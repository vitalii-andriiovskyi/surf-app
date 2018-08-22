// var express = require('express');
const Post = require('/src-server/models/post').Post;
const logger = require('/src-server/libs/log')(module);

import { pipe, bindNodeCallback  } from 'rxjs';
import { switchMap, map, catchError  } from 'rxjs/operators';

module.exports.get = function(req, res, next) {
  Post.findOne( { 'id': req.params.id }, (err, post) => {

    if (err) {
      return next(err);
    }

    if (!post) {
      next(404);
    }

    res.json(post);
  });
  // res.send('Post is found');
};

// version with RxJS; It helped to solve issue: "Can't set Headers after they are sent"
module.exports.getRx = function(req, res, next) {
  bindNodeCallback(Post.findOne).call(Post, {'id': req.params.id })
    .pipe(
      catchError(err => { throw err; } ),
      map(post => {
        if (!post) { throw 404; }
        return post;
      })
    ).subscribe(
      post => {
        logger.debug('mongoose found needed post');
        res.json(post);
      },
      err => {
        logger.error(err);
        next(err);
      }
    );
};


module.exports.getPosts = function(req, res, next) {
  let maxNumberDoc = 50;
  const quantity = +req.query.quantity;
  if (quantity && typeof quantity === 'number') {
    maxNumberDoc = quantity;
  }

  Post.find({})
    .limit(maxNumberDoc)
    .sort({date: 'desc'})
    .exec((err, posts) => {
      if (err) { return next(err); }

      if (!posts) {
        next(404);
      }

      res.json(posts);
    });

};

// should give 3 last post article
module.exports.getPostsHome = function(req, res, next) {
  Post.find( { }, (err, posts) => {
    if (err) { return next(err); }

    if (!posts) {
      next(404);
    }

    res.json(posts);
  });
};

