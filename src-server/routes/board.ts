// var express = require('express');
const Board = require('/src-server/models/board').Board;
const logger = require('/src-server/libs/log')(module);

import { pipe, bindNodeCallback  } from 'rxjs';
import { switchMap, map, catchError  } from 'rxjs/operators';



// version with RxJS; It helped to solve issue: "Can't set Headers after they are sent"
module.exports.getBoard = function(req, res, next) {
  bindNodeCallback(Board.findOne).call(Board, {'id': req.params.id })
    .pipe(
      catchError(err => { throw err; } ),
      map(board => {
        if (!board) {
          throw 404;
        }
        return board;
      })
    ).subscribe(
      board => {
        logger.debug('mongoose found needed board');
        res.json(board);
      },
      err => {
        logger.error(err);
        next(err);
      }
    );
};


module.exports.getBoards = function(req, res, next) {
  Board.find({ }, (err, boards) => {
    if (err) {
      return next(err);
    }

    if (!boards) {
      next(404);
    }

    res.json(boards);
  });
};

