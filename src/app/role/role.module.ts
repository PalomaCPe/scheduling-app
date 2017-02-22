import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoleComponent} from './role.component';

// ROTA
import { RouterModule, Router } from '@angular/router';

@NgModule({
    imports: [ BrowserModule, /*ROTA*/ RouterModule.forChild([{ path: 'roles', component: RoleComponent}]) /*ROTA*/],
    declarations: [ RoleComponent], 
    bootstrap: [ RoleComponent]
})

export class RoleModule { }
