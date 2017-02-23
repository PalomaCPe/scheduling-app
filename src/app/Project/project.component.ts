import { Component } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../shared/mocks';

@Component({
    moduleId: module.id,
    selector: 'ava-project' ,
    templateUrl: 'project.html'
})

export class ProjectComponent
{
    propriedade: string = "Project";
    project: Project[];
    PROJECTS = Project;
}