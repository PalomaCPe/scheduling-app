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
var Professional = (function () {
    function Professional() {
        this.id = '123';
        this.pid = '321';
        this.eid = 'p.josephclimber@prservicos.com.br';
        this.name = 'joseph climber';
        this.email = 'josephclimber@mail.com';
        this.phone = '2345678';
        this.role = '2345678';
    }
    Professional = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'prof',
            templateUrl: 'professionals.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Professional);
    return Professional;
}());
exports.Professional = Professional;
//# sourceMappingURL=professional.component.js.map