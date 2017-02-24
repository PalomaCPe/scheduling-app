import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoleService } from './role.service';
import { Role } from './role';

@Component({
    moduleId: module.id,
    templateUrl: 'role-detail.html'
})

export class RoleDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _roleService: RoleService) { }
        
    pageName: string = "Detalhes do Perfil";
    id: number;
    role: Role;

    getRole() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this.role = this._roleService.getRole(this.id);
    }

    ngOnInit()
    {
        this.getRole();
    }
}