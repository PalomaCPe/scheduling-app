import { Project } from '../model/project';
import { PROJECTS } from '../../app/shared/mock';

export class ProjectPersistence {
    list(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
}