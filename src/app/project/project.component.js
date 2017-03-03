"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Project = (function () {
    function Project() {
        this.id = '123';
        this.name = '321';
        this.start_date = 'p.josephclimber@prservicos.com.br';
        this.end_date = 'joseph climber';
        this.wbs = 'josephclimber@mail.com';
        this.Costumer = '2345678';
        this.sponsor = '2345678';
    }
    return Project;
}());
Project = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'project',
        templateUrl: 'project.html'
    })
], Project);
exports.Project = Project;
//# sourceMappingURL=project.component.js.map