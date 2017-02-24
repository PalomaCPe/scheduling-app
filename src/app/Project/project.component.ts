import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../shared/mocks';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    selector: 'ava-project' ,
    templateUrl: 'project.html'
})

export class ProjectComponent implements OnInit {
  constructor(private _projectService: ProjectService) { }

    projects: Project[] = this._projectService.getProjects();
    pageName: string = "Projeto";

    ngOnInit() { }
}


