"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("./../shared/shared.module");
var costumer_component_1 = require("./costumer.component");
//import { CostumerDetailsComponent } from './costumer-details.component';
var Costumer_service_1 = require("./Costumer.service");
//import { ProfessionalService } from '../../professional/professional.service';
var CostumerModule = (function () {
    function CostumerModule() {
    }
    return CostumerModule;
}());
CostumerModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, shared_module_1.SharedModule,
            router_1.RouterModule.forRoot([
                { path: 'costumers', component: costumer_component_1.CostumerComponent },
            ])],
        declarations: [costumer_component_1.CostumerComponent],
        providers: [Costumer_service_1.CostumerService]
    })
], CostumerModule);
exports.CostumerModule = CostumerModule;
//# sourceMappingURL=costumer.module.js.map