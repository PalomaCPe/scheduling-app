import { Professional } from '../model/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication {
    constructor(
        private professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence()
    ) { }

    getCustomers(): Promise<Professional[]> {
        return this.professionalPersistence.list();
    }
}