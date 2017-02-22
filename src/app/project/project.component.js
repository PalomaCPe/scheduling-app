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
var Project = (function () {
    function Project() {
        this.id = '123';
        this.name = '321';
        this.start_date = 'p.josephclimber@prservicos.com.br';
        this.end_date = 'joseph climber';
        this.wbs = 'josephclimber@mail.com';
        this.customer = '2345678';
        this.sponsor = '2345678';
    }
    Project = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project',
            templateUrl: 'project.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Project);
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.component.js.map