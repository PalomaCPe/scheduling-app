"use strict";
var mongodb_1 = require("mongodb");
var mongoUrl = 'mongodb://localhost:27017/database';
var Connection = (function () {
    function Connection() {
    }
    Connection.conn = function () {
        return Promise.resolve(mongodb_1.MongoClient.connect(mongoUrl)
            .then(function (db) {
            console.log('Conectou!');
            return db;
        }))
            .catch(function () { console.log('Erro'); });
    };
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map