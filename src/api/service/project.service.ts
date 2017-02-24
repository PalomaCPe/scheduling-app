import { Router, Response, Request } from 'express';
import { ProjectApplication } from '../application/project.application';
import { Project } from '../model/project';

export const projectRouter: Router = Router();

projectRouter.get('/list', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.getProjects().then((resultado: Project[]) => {
        response.json(resultado);
    });

})