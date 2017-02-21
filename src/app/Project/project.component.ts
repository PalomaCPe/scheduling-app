import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-project' ,
    templateUrl: 'project.html'
})

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
