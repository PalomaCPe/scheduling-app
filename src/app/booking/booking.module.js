"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//Rota
var router_1 = require("@angular/router");
var booking_component_1 = require("./booking.component");
var booking_service_1 = require("./booking.service");
var percentualPipe_1 = require("../shared/percentualPipe");
var booking_detail_component_1 = require("./booking-detail.component");
var forms_1 = require("@angular/forms");
var BookingModule = (function () {
    function BookingModule() {
    }
    return BookingModule;
}());
BookingModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'bookings', component: booking_component_1.BookingComponent },
                { path: 'booking/:id', component: booking_detail_component_1.BookingDetailComponent }
            ])],
        declarations: [booking_component_1.BookingComponent, booking_detail_component_1.BookingDetailComponent, percentualPipe_1.PercentualPipe],
        providers: [booking_service_1.BookingService]
    })
], BookingModule);
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map