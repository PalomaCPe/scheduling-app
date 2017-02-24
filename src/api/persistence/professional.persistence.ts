import { Professional } from '../model/professional';
import { PROFESSIONALS } from '../../app/shared/mock';

export class ProfessionalPersistence {
    list(): Promise<Professional[]> {
        return Promise.resolve(PROFESSIONALS);
    }
}