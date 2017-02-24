import { Component, OnInit } from '@angular/core';
import { Professional } from './professional';
import { PROFESSIONAL } from '../shared/mocks';
import { ProfessionalService } from './professional.service';

@Component({
    moduleId: module.id,
    selector: 'ava-professional' ,
    templateUrl: 'professional.html'
})
export class ProfessionalComponent implements OnInit {
    constructor(private _professionalService: ProfessionalService) { }

    professionals: Professional[] = this._professionalService.getProfessionals();
    pageName: string = "Professional";

    ngOnInit() { }
}

