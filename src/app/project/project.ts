import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';

export class Project{
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    wbs: string;
    customerId: number;
    sponsorId: number;
    customer: Customer;
    professional: Professional;
}