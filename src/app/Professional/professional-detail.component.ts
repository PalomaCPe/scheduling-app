import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProfessionalService } from './professional.service';
import { Professional } from './professional';

@Component({
    moduleId: module.id,
    templateUrl: 'professional-detail.html'
})

export class ProfessionalDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _professionalService: ProfessionalService) { }
        
    pageName: string = "Detalhes do Professional";
    id: number;
    professional: Professional;

    getProfessional() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this.professional = this._professionalService.getProfessional(this.id);
    }

    ngOnInit()
    {
        this.getProfessional();
    }
}