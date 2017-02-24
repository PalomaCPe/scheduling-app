import { Component } from '@angular/core';

import { Project } from './project';

import { ProjectService } from './project.service';

@Component({
	moduleId: module.id,
	selector: 'project',
	templateUrl: 'project.html'
})

export class ProjectComponent{
	propriedade: string = 'projetos';
 }