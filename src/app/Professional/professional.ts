import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { ProfessionalModule } from './professional.module';	
import { Role } from '../Role/Role';	
 		
platformBrowserDynamic().bootstrapModule(ProfessionalModule);

export class Professional {
    id: number;
    pid: number;
    eid: string;
    name: string;
    email: string;
    phone: string;
    role: Role

    constructor() { }
}