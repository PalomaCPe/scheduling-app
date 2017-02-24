import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail.component';

import { ProjectService } from './project.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([
                                                    { path: 'projects', component: ProjectComponent},
                                                    { path: 'projects/:id', component: ProjectDetailComponent}])],
    exports: [],
    declarations: [ProjectComponent, ProjectDetailComponent],
    providers: [ProjectService],
})

export class ProjectModule { }