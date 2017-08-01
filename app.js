const express = require('express');
const index = require('./routes/index');

const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// Disabling no-unused-vars since next is needed by express for error catching
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error message
  res.status(err.status || 500);
  res.send(err);
});


module.exports = app;
