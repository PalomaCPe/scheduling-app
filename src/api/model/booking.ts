import { Professional } from './professional';
import { Project } from './project';

export class Booking
{
    id: number;
    projectId: number;
    professionalId: number;
    startDate: Date;
    endDate: Date;
    bookingPercentual: number;    
    professional: Professional;
    project: Project;    
}