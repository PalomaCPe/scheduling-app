import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { BookingModule } from './booking.module';	
import { Professional } from '../Professional/professional';		
 		
export class Booking
{
    projectId: number;
    professionalId: number;
    dataInicioAlocacao: string;
    dataFimAlocacao: string;
    percentualAlocacao: number;
    //projeto: projeto;
    professional: Professional;
}