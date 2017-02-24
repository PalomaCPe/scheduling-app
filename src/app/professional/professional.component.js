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
var professional_service_1 = require('./professional.service');
var ProfessionalComponent = (function () {
    function ProfessionalComponent(_professionalService) {
        this._professionalService = _professionalService;
        this.professionalLabel = "Tela de Profissionais";
        this.professionals = this._professionalService.getProfessional();
    }
    ProfessionalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'professional-app',
            templateUrl: 'professional.html'
        }), 
        __metadata('design:paramtypes', [professional_service_1.ProfessionalService])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());
exports.ProfessionalComponent = ProfessionalComponent;
//# sourceMappingURL=professional.component.js.map