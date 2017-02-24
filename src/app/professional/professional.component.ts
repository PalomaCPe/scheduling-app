import { Component } from '@angular/core';
import { Professional } from './professional';
import { ProfessionalService } from './professional.service';

@Component({
    moduleId: module.id,
    selector: 'professional-app',
    templateUrl: 'professional.html'
})

export class ProfessionalComponent {
    constructor(
        private _professionalService: ProfessionalService
    ) { }

    professionalLabel: string = "Tela de Profissionais";
    professionals: Professional[] = this._professionalService.getProfessional();
}
