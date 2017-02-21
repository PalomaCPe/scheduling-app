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
var app_component_1 = require('./app.component');
var customer_component_1 = require('./customer/customer.component');
var booking_component_1 = require('./booking/booking.component');
var role_component_1 = require('./role/role.component');
var professional_component_1 = require('./professional/professional.component');
var project_component_1 = require('./project/project.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, customer_component_1.CustomerComponent, booking_component_1.BookingComponent, role_component_1.RoleComponent, professional_component_1.ProfessionalComponent, project_component_1.ProjectComponent],
            bootstrap: [app_component_1.AppComponent, customer_component_1.CustomerComponent, booking_component_1.BookingComponent, role_component_1.RoleComponent, professional_component_1.ProfessionalComponent, project_component_1.ProjectComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map