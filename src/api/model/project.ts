import { Customer } from './customer';
import { Professional } from './professional';

export class Project
{
    projectId: number;
    name: string;
    StartDate: Date;
    EndDate: Date;
    wbs: string;
    customer: Customer;
    sponsor: Professional;
}