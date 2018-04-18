"use strict";

var MongoClient = require("mongodb").MongoClient;
var Server = require('mongodb').Server;

MongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if (err) {
        console.log(err);
        return process.exit();
    }

    var db = client.db('cursonode');

    db.collection('agentes').find().toArray(function(err, docs) {
        if (err) {
            console.log(err);
            return process.exit();
        }

        console.log(docs);

        client.close();
    });
});