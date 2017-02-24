import { Professional } from '../model/professional';
import { PROFESSIONAL } from '../../app/shared/mocks';

export class ProfessionalPersistence {
    list(): Promise<Professional[]>{
        return Promise.resolve(PROFESSIONAL);
    }
};