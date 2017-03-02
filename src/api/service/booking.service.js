"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var booking_application_1 = require("../application/booking.application");
exports.bookingRouter = express_1.Router();
exports.bookingRouter.get('/list', function (request, response) {
    var bookingApplication = new booking_application_1.BookingApplication();
    bookingApplication.getBookings()
        .then(function (resultado) {
        response.json(resultado);
    });
});
exports.bookingRouter.get('/:id', function (request, response) {
    var bookingApplication = new booking_application_1.BookingApplication();
    var id = +request.params.id;
    bookingApplication.getBooking(id)
        .then(function (result) {
        response.json(result);
    });
});
//# sourceMappingURL=booking.service.js.map