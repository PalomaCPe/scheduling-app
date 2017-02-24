import { Project } from "./project";
import { Professional } from "./professional";

export class Booking {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
    project: Project;
    professional: Professional;
}