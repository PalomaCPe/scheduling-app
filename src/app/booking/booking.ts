import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { BookingModule } from './booking.module';	
import { Professional } from '../Professional/professional';		
import { Project } from '../Project/project';		
 		
export class Booking
{
    id: number;
    projectId: number;
    professionalId: number;
    startDate: string;
    endDate: string;
    bookingPercentual: number;    
    professional: Professional;
    project: Project;    
}