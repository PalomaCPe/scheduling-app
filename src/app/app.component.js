"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.mostra = true;
    }
    AppComponent.prototype.interpolacao = function () {
        this.mostra = true;
        this.pageName = "Nome da Página";
    };
    AppComponent.prototype.propriedade = function () {
        this.mostra = true;
        this.icon = "glyphicon glyphicon-calendar";
    };
    AppComponent.prototype.mostrar = function () {
        if (this.mostra)
            this.mostra = false;
        else
            this.mostra = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ava-app',
        templateUrl: 'app.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map