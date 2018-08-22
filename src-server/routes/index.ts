import * as express from 'express';
const router = express.Router();


/* GET home page. */
router
  // .get('/',  function(req, res, next) {
  //   res.send('respond with a resource');
  // })
  .get('/posts-home', require('./post').getPostsHome)
  .get('/posts', require('./post').getPosts)
  .get('/post/:id', require('./post').getRx)
  .get('/boards', require('./board').getBoards)
  .get('/board/:id', require('./board').getBoard)
  .get('/teamHome', require('./team-member').getTeam)
  .get('/team/:id', require('./team-member').getWorker)
  .get('*', (req, res) => {
    res.status(404).send('data requests are not supported');
  });

  // console.log(router);

module.exports = router;
