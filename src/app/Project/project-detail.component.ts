import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from './project';

@Component({
    moduleId: module.id,
    templateUrl: 'project-detail.html'
})

export class ProjectDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _projectService: ProjectService) { }
        
    pageName: string = "Detalhes do Projeto";
    id: number;
    project: Project;

    getProject() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this.project = this._projectService.getProject(this.id);
    }

    ngOnInit()
    {
        this.getProject();
    }
}