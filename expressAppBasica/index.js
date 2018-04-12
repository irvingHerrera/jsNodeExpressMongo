"use strict";

var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function(req, res) {
    console.log('petecion a /');
    res.send('Hello world');
});

var server = app.listen(3000, () => {
    var port = server.address().port;
    console.log('App de ejemplo ejecutandose en el puerto', port);
    console.log('App listening on port 3000!');
});