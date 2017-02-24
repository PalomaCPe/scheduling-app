import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleDetailComponent } from './role-detail.component';

import { RoleService } from './role.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([
                                                    { path: 'roles', component: RoleComponent },
                                                    { path: 'roles/:id', component: RoleDetailComponent }])],
    exports: [],
    declarations: [RoleComponent, RoleDetailComponent],
    providers: [RoleService],

})

export class RoleModule { }