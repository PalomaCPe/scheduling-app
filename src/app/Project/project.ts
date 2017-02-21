import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';		
import { ProjectModule } from './project.module';
import { Customer } from '../customer/customer';


platformBrowserDynamic().bootstrapModule(ProjectModule);

export class Project
{
    projectId: number;
    name: string = "Name";
    StartDate: string = "Start Date";
    EndDate: string = "End Date";
    wbs: string = "wbs";
    customer: string = "customer";
    sponsor: string = "Sponsor"
}
