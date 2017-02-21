import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-app',
    templateUrl: 'app.html'
})

export class AppComponent {
    pageName: string;
    icon: string;
    mostra: boolean = true;

    interpolacao() {
        this.mostra = true;
        this.pageName = "Nome da Página";
    }

    propriedade() {
        this.mostra = true;
        this.icon = "glyphicon glyphicon-calendar";
    }

    mostrar() {
        if (this.mostra)
            this.mostra = false;
        else
            this.mostra = true;
    }
}
