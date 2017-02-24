import { Injectable } from '@angular/core';

import { Professional } from './professional';

import { PROFESSIONAL } from '../shared/mocks';

@Injectable()
export class ProfessionalService {
    getProfessionals(): Professional[] {
        return PROFESSIONAL;
    }

    getProfessional(id: number): Professional {
        return PROFESSIONAL.find(r => r.id == id);
    }
}