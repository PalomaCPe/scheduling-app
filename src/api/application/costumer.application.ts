import { Costumer } from '../model/Costumer';
import { CostumerPersistence } from '../persistence/Costumer.persistence';

export class CostumerApplication {

    private _CostumerPersistence: CostumerPersistence = new CostumerPersistence();

    createCostumer(Costumer: Costumer): Promise<Costumer> {
        return this._CostumerPersistence.create(Costumer);
    }

    getCostumer(id: number): Promise<Costumer> {
        return this._CostumerPersistence.read(id);
    }

    getCostumers(): Promise<Costumer[]> {
        return this._CostumerPersistence.list();
    }

    updateCostumer(Costumer: Costumer): Promise<Costumer> {
        return this._CostumerPersistence.update(Costumer);
    }

    deleteCostumer(id: number): Promise<boolean> {
        return this._CostumerPersistence.delete(id);
    }
}