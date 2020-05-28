 const sendHttpError = function(req, res, next) {
  res.sendHttpError = function(error) {
    res.status = error.status;
    // if there is ajax request then res.json() else ...
    if (res.req.headers['x-requested-with'] === 'XMLHttpRequest') {
      res.json(error);
    } else {
      res.render('error', { error: error });
    }
  };
  next();
};

export default sendHttpError;