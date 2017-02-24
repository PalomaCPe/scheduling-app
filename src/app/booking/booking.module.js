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
var platform_browser_1 = require('@angular/platform-browser');
//ROTA
var router_1 = require('@angular/router');
var booking_component_1 = require('./booking.component');
var bookings_services_1 = require('./bookings.services');
var percentual_1 = require('../shared/percentual');
var booking_detail_componet_1 = require('./booking.detail.componet');
var BookingModule = (function () {
    function BookingModule() {
    }
    BookingModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                // ROTA
                router_1.RouterModule.forChild([
                    { path: 'booking', component: booking_component_1.BookingComponent },
                    { path: 'booking/:id', component: booking_detail_componet_1.BookingDetailComponent }
                ])],
            declarations: [booking_component_1.BookingComponent, booking_detail_componet_1.BookingDetailComponent, percentual_1.PercentualPipe],
            providers: [bookings_services_1.BookingService]
        }), 
        __metadata('design:paramtypes', [])
    ], BookingModule);
    return BookingModule;
}());
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map