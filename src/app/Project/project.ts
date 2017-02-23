import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { ProjectModule } from './project.module';
import { Customer } from '../customer/customer';


platformBrowserDynamic().bootstrapModule(ProjectModule);

export class Project
{
    projectId: number;
    name: string;
    StartDate: Date;
    EndDate: Date;
    wbs: string;
    customer: Customer;
    sponsor: string;

     constructor() { }
}
