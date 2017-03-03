import { Professional } from '../model/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication {
    constructor (
        private professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence()
    ){}

    getProfessionals(): Promise<Professional[]>{
        return this.professionalPersistence.list();
    }

    getProfessional(id: number): Promise<Professional>{
        return this.professionalPersistence.read(id);
    }
}