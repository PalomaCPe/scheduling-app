import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router} from '@angular/router';
import { ProjectComponent } from './project.component';

@NgModule({
    imports: [ BrowserModule, RouterModule.forChild([
        { path: 'projects', component:ProjectComponent}
        ])],
    declarations: [ ProjectComponent], 
    bootstrap: [ ProjectComponent]
})

export class ProjectModule { }