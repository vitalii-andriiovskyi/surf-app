// var express = require('express');
import TeamMember from '../models/team-member';
import getLogger from '../libs/log';
const logger = getLogger(module);

import { pipe, bindNodeCallback  } from 'rxjs';
import { switchMap, map, catchError  } from 'rxjs/operators';


// version with RxJS; It helped to solve issue: "Can't set Headers after they are sent"
export function getWorker(req, res, next) {
  bindNodeCallback(TeamMember.findOne).call(TeamMember, {'id': req.params.id })
    .pipe(
      catchError(err => { throw err; } ),
      map(teamMember => {
        if (!teamMember) { throw 404; }
        return teamMember;
      })
    ).subscribe(
      teamMember => {
        logger.debug('mongoose found needed TeamMember');
        res.json(teamMember);
      },
      err => {
        logger.error(err);
        next(err);
      }
    );
}


export function getTeam(req, res, next) {
  TeamMember.find( { }, (err, teamMember) => {
    if (err) { return next(err); }

    if (!teamMember) {
      next(404);
    }

    res.json(teamMember);
  });
}

