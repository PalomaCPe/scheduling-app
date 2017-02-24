import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([
        { path: 'projects', component: ProjectComponent }
    ])],
    declarations: [ProjectComponent],
    providers: [ProjectService]
    //bootstrap: [ ProjectComponent]
})

export class ProjectModule { }