import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service'

@NgModule({
    imports: [BrowserModule, 
    RouterModule.forChild([
        { path: 'project', component: ProjectComponent}
    ])],
    declarations: [ ProjectComponent ] ,
    providers: [ProjectService],
})

export class ProjectModule{
    propriedade: string = 'Project';
}