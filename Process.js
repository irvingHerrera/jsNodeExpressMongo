"use strict";

//informacion del proceso

var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carptea: process.cwd()
};

console.log("entro en", info);

process.on('exit', function() {
    console.log('Adios. Antes de terminar el proceso');
});

console.log('fin del proceso');

process.exit(0); //Termina la ejecucion
console.log('el proceso ya termino');