"use strict"

var fs = require('fs');
var path = require('path');

var versionModulo = function(moduloName, callback) {
    var fichero = path.join('./node_modules', moduloName, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callback(err);
            return;
        }

        var packageJson;
        try {
            packageJson = JSON.parse(data);
        } catch (error) {
            callback('Error al parsear el ' + fichero);
            return;
        }

        if (packageJson && !packageJson.version) {
            callback('No se encuentra la etiqueta version en ' + fichero);
            return;
        }

        callback(null, packageJson.version);

    });
};

var modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log("Huno un error:", err);
        return;
    }

    console.log("La version del modulo " + module + ' es ' + version);
});