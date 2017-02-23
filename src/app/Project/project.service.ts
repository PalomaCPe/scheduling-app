import { Injectable } from '@angular/core';

import { Project } from './project';

import { PROJECTS } from '../shared/mocks';

@Injectable()
export class ProjectService {
    getProject(): Project[] {
        return PROJECTS;
    }
}