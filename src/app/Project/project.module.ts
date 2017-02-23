import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { ProjectComponent } from './project.component';

import { ProjectService } from './project.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([{ path: 'project', component: ProjectComponent}])],
    exports: [],
    declarations: [ProjectComponent],
    providers: [ProjectService],
})

export class ProjectModule { }