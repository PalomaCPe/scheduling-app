"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("./connection");
var BookingPersistence = (function () {
    function BookingPersistence() {
    }
    BookingPersistence.prototype.list = function () {
        var database;
        return Promise.resolve(connection_1.Connection.conn()
            .then(function (db) {
            database = db;
            return db.collection('booking').find().toArray();
        })
            .then(function (bookings) {
            database.close();
            return bookings;
        }));
    };
    BookingPersistence.prototype.read = function (id) {
        var database;
        return Promise.resolve(connection_1.Connection.conn()
            .then(function (db) {
            database = db;
            return db.collection('booking').findOne({ id: id });
        })
            .then(function (booking) {
            database.close();
            return booking;
        }));
    };
    return BookingPersistence;
}());
exports.BookingPersistence = BookingPersistence;
//# sourceMappingURL=booking.persistence.js.map