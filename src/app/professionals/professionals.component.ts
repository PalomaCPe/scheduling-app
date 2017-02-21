import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'prof',
	templateUrl: 'professionals.html'
})

export class Professionals{
	PID: string = '123';
	EID: string = '321';
	nome: string = 'joseph climber';
	email: string = 'josephclimber@mail.com';
	cargo: string = 'pesoDePapel';
	telefone: string ='2345678';

}