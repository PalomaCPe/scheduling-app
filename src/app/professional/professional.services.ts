import { Injectable } from '@angular/core';

import { Professional } from './professional'
import { PROFESSIONAL } from "../shared/mock";


@Injectable()
export class ProfessionalService{
    getCostumer(): Professional[]{
        return PROFESSIONAL;
    }

     getProfessional(id: number): Professional{
        return PROFESSIONAL.find(r => r.id == id);
    }
}