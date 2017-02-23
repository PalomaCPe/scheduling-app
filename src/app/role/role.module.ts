import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { RoleComponent } from './role.component';

import { RoleService } from './role.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([{ path: 'roles', component: RoleComponent }])],
    exports: [],
    declarations: [RoleComponent],
    providers: [RoleService],

})

export class RoleModule { }