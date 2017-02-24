import { Router, Response, Request } from 'express';
import { Project } from '../model/project';
import { ProjectApplication } from '../application/project.application';

export const projectRouter: Router = Router();

projectRouter.get('/list', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.getProjects()
        .then((resultado: Project[]) => {
            response.json(resultado);
        });
})