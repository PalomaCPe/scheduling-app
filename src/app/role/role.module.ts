import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoleComponent } from './role.component';

// ROTA
import { RouterModule, Router } from '@angular/router';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([{ path: 'roles', component: RoleComponent }])],
    declarations: [RoleComponent],
    bootstrap: [RoleComponent]
})

export class RoleModule { }
