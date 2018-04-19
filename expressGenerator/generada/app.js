var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var app = express();

require('./lib/connectMongose');
require('./models/Agentes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    console.log("middleware a nivel de aplicacion");
    //next({ status: 500, message: 'Imposible continuar..' });
    next();
});

app.use('/', indexRouter);
app.use('/users', require('./routes/users'));
app.use('/clientes', require('./routes/clientes'));
app.use('/apiV1/agentes', require('./routes/apiV1/agentes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    if (isAPI(req)) {
        res.json({ ok: false, error: err.message });
        return;
    }
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    if (isAPI(req)) {
        res.json({ ok: false, error: err.message });
        return;
    }
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

function isAPI(req) {
    return req.originalUrl.indexOf('/api') === 0;
}

module.exports = app;