"use strict";
var booking_persistence_1 = require("../persistence/booking.persistence");
var BookingApplication = (function () {
    function BookingApplication(bookingPersistence) {
        if (bookingPersistence === void 0) { bookingPersistence = new booking_persistence_1.BookingPersistence(); }
        this.bookingPersistence = bookingPersistence;
    }
    BookingApplication.prototype.getBookings = function () {
        return this.bookingPersistence.list();
    };
    return BookingApplication;
}());
exports.BookingApplication = BookingApplication;
//# sourceMappingURL=booking.application.js.map