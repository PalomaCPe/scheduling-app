import { Injectable } from '@angular/core';

import { Project } from './project';

import { PROJECTS } from '../shared/mocks';

@Injectable()
export class ProjectService {
    getProjects(): Project[] {
        return PROJECTS;
    }

    getProject(id: number): Project {
        return PROJECTS.find(r => r.projectId == id);
    }
}