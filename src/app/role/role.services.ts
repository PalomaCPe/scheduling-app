import { Injectable } from '@angular/core';

import { Role } from './role';
import { ROLES } from '../shared/mock';

@Injectable()
export class RoleService{
    getRoles(): Role[] {
        return ROLES;
    }
    
}
