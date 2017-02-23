import { Injectable } from '@angular/core';

import { Costumer } from './costumer'
import { COSTUMERS } from "../shared/mock";


@Injectable()
export class CostumerService{
    getCostumer(): Costumer[]{
        return COSTUMERS;
    }
}