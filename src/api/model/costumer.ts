export class Costumer {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;

    constructor(id?: number) {
        this.id = id || null;
    }
}