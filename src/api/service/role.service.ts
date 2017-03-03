import { Router, Response, Request } from 'express';
import { Role } from '../model/role';
import { RoleApplication } from '../application/role.application';

export const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApplication: RoleApplication = new RoleApplication();

    roleApplication.getRoles()
        .then((resultado: Role[]) => {
            response.json(resultado);
        });
})

roleRouter.get('/:id', (request: Request, response: Response) => {
    let roleApplication: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    roleApplication.getRole(id)
        .then((resultado: Role) => {
            response.json(resultado);
        });
})