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
    BookingPersistence.prototype.create = function (booking) {
        var database;
        return Promise.resolve(connection_1.Connection.conn()
            .then(function (db) {
            database = db;
            return db.collection('booking').insertOne({
                id: booking.id,
                projectId: booking.projectId,
                professionalId: booking.professionalId,
                startDate: booking.startDate,
                endDate: booking.endDate,
                percentual: booking.percentual
            });
        })
            .then(function (inserted) {
            if (inserted.result.ok == 1) {
                var saved = inserted.ops[0];
                return saved;
            }
            else {
                return Promise.reject(Error('Erro ao inserir'));
            }
        }));
    };
    return BookingPersistence;
}());
exports.BookingPersistence = BookingPersistence;
//# sourceMappingURL=booking.persistence.js.map