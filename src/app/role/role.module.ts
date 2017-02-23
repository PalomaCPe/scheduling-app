import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoleComponent} from './role.component';
import { RouterModule, Router } from '@angular/router';
import { RoleService } from './role.service';

@NgModule({
    imports: [ BrowserModule, /*ROTA*/ RouterModule.forChild([{ path: 'roles', component: RoleComponent}]) /*ROTA*/],
    declarations: [ RoleComponent], 
    providers: [RoleService]
    //bootstrap: [ RoleComponent]
})

export class RoleModule { }
