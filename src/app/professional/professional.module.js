"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var professional_component_1 = require("./professional.component");
var professional_service_1 = require("./professional.service");
var ProfessionalModule = (function () {
    function ProfessionalModule() {
    }
    return ProfessionalModule;
}());
ProfessionalModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forChild([
                { path: 'professionals', component: professional_component_1.ProfessionalComponent }
            ])],
        declarations: [professional_component_1.ProfessionalComponent],
        providers: [professional_service_1.ProfessionalService]
    })
], ProfessionalModule);
exports.ProfessionalModule = ProfessionalModule;
//# sourceMappingURL=professional.module.js.map