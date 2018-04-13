"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("req.query", req.query);
    res.send('respuesta a clientes');
});

router.get('/:id', function(req, res, next) {
    res.send('recibido parametro ' + req.params.id);
});

router.post('/', function(req, res, next) {
    console.log('recibido parametro ', req.body);
    res.json({ recibidos: req.body.num });
});


module.exports = router;