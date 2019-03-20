var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')
const passport = require('passport');
require('./configs/passport.config')(passport);

var indexRouter = require('./routes/index');
var secureRouter = require('./routes/secure');
var authsRouter = require('./routes/auths');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// cors for preflight and all request
app.options('*', cors())
app.use(cors());
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/secure', secureRouter);
app.use('/auths', authsRouter);
// app.use('/secure1', 
//   passport.authenticate('usersLocalStrategyJwt', { session: false, failureRedirect: '/forbidden' }), secureRouter);
app.use('/settings', 
  passport.authenticate('usersLocalStrategyJwt', { successRedirect: 'http://www.google.com',failureRedirect: 'http://www.yahoo.com' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
