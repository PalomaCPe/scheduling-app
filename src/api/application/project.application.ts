import { Project } from '../model/project';
import { ProjectPersistence } from '../persistence/project.persistence';

export class ProjectApplication {
    constructor (
        private projectPersistence: ProjectPersistence = new ProjectPersistence()
    ){}

    getProjects(): Promise<Project[]>{
        return this.projectPersistence.list();
    }

    getProject(id: number): Promise<Project>{
        return this.projectPersistence.read(id);
    }
}