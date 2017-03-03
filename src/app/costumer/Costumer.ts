import { ICostumer } from './Costumer.interface';

export class Costumer implements ICostumer {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
    deleted: boolean;
}