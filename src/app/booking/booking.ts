import { Project } from '../project/project';
import { Professional } from '../professional/professional';

export class Booking {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
    //Propriedades de navegação
    project: Project;
    professional: Professional;
}
