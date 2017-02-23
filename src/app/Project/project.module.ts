import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { ProjectComponent } from './project.component';

@NgModule({
    imports: [BrowserModule,
        // ROTA
        RouterModule.forChild([
            { path: 'project', component: ProjectComponent }
        ])],
    declarations: [ProjectComponent],

})

export class ProjectModule { }