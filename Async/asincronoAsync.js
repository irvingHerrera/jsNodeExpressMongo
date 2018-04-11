"use strict"

var async = require('async');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    });
}


var lista = [1, 2, 'tres', 4, 5];

//console.log("hola", lista.shift());

async.eachSeries(lista, escribeTras2Segundos, function() {
    console.log('ha terminado');
});