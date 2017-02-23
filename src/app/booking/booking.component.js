"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var booking_service_1 = require('./booking.service');
var BookingComponent = (function () {
    function BookingComponent(_bookingService) {
        this._bookingService = _bookingService;
        this.project = "";
        this.propriedade = "";
        this.bookings = this._bookingService.getBookings();
    }
    BookingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ava-booking',
            templateUrl: 'booking.html'
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService])
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
//# sourceMappingURL=booking.component.js.map