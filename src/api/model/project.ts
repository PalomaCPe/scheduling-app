import { Professional } from './professional';
import { Costumer } from './Costumer';

export class Project {
    projectId: number;
    name: string;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;

    CostumerId: number;
    sponsorId: number;

    Costumer: Costumer;
    professional: Professional;

    deleted:boolean;

    constructor(id?: number) {
        this.projectId = id || null;
    }
}