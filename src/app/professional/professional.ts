import { Role } from '../role/role';

export class Professional{    
    id: number;
    pid: number;
    eid: number;
    name: string;
    email: string;
    phone: string;
    roleId: number; 
    role: Role;
}