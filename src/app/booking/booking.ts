import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { BookingModule } from './booking.module';

export class Booking { 
    id: number;
    projectId: number;
    professionalId: number;
    startDate: Date;
    endDate: Date;
    percentual: number;    
    //professional: Professional;
    //project: Project;    
}