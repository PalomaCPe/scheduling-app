import { Injectable } from '@angular/core';

import { Professional } from './professional';

import { PROFESSIONAL } from '../shared/mocks';

@Injectable()
export class ProfessionalService {
    getProfessional(): Professional[] {
        return PROFESSIONAL;
    }
}