import { Role } from '../model/role';
import { ROLES } from '../../app/shared/mock';

export class RolePersistence {
    list(): Promise<Role[]> {
        return Promise.resolve(ROLES);
    }
}