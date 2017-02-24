import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    selector: 'project-app',
    templateUrl: 'project.html'
})

export class ProjectComponent {
    constructor(
        private _projectService: ProjectService
    ) { }
    
    projectLabel: string = "Tela de Projetos";
    projects: Project[] = this._projectService.getProject();
}
