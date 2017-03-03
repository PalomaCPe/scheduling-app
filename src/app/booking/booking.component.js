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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var booking_service_1 = require("./booking.service");
var project_service_1 = require("../project/project.service");
var professional_service_1 = require("../professional/professional.service");
require("rxjs/add/operator/toPromise");
var BookingComponent = (function () {
    function BookingComponent(_bookingService, _professionalService, _projectService) {
        this._bookingService = _bookingService;
        this._professionalService = _professionalService;
        this._projectService = _projectService;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._professionalService.getProfessionalList()
            .then(function (professionals) {
            _this.professionals = professionals;
            return _this._projectService.getListProject();
        })
            .then(function (projects) {
            _this.projects = projects;
            return _this._bookingService.getBookingList();
        })
            .then(function (bookings) {
            _this.bookings = bookings;
            _this.getCompletedBookings();
        });
    };
    BookingComponent.prototype.getCompletedBookings = function () {
        this.bookings.forEach(function (obj) {
            // obj.project = this.projects.find(p => p.projectId === obj.projectId);
            // obj.professional = this.professionals.find(p => p.professionalId === obj.professionalId);
        });
    };
    return BookingComponent;
}());
BookingComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ava-bok-app',
        templateUrl: 'booking.html'
    }),
    __metadata("design:paramtypes", [booking_service_1.BookingService,
        professional_service_1.ProfessionalService,
        project_service_1.ProjectService])
], BookingComponent);
exports.BookingComponent = BookingComponent;
//# sourceMappingURL=booking.component.js.map