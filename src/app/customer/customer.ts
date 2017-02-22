import { Professional } from '../professional/professional';

export class Customer{
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsorId: number;
    sponsor: Professional;
}