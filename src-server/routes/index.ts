import * as express from 'express';
const router = express.Router();

import { getBoard, getBoards } from './board';
import { getPostsHome, getPosts, getRx } from './post';
import { getTeam, getWorker } from './team-member';


/* GET home page. */
router
  // .get('/',  function(req, res, next) {
  //   res.send('respond with a resource');
  // })
  .get('/posts-home', getPostsHome)
  .get('/posts', getPosts)
  .get('/post/:id', getRx)
  .get('/boards', getBoards)
  .get('/board/:id', getBoard)
  .get('/teamHome', getTeam)
  .get('/team/:id', getWorker)
  .get('*', (req, res) => {
    res.status(404).send('data requests are not supported');
  });

  // console.log(router);

export default router;
