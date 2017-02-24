import { Booking } from '../booking/booking';
import { Role } from '../role/role';
import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';
import { Project } from '../project/project';

export const BOOKINGS: Booking[] = [
    {
        id: 1,
        startDate: new Date('2017-03-11T02:00:00.0002'),
        endDate: new Date('2017-03-17T02:00:00.0002'),
        percentual: 10,
        projectId: 1,
        professionalId: 1,
        project: null,
        professional: null,
    },

    {
        id: 2,
        startDate: new Date('2017-03-02T02:00:00.0002'),
        endDate: new Date('2017-08-14T02:00:00.0002'),
        percentual: 35,
        projectId: 2,
        professionalId: 2,
        project: null,
        professional: null,
    },

    {
        id: 3,
        startDate: new Date('2017-10-01T02:00:00.0002'),
        endDate: new Date('2017-11-30T02:00:00.0002'),
        percentual: 60,
        projectId: 3,
        professionalId: 3,
        project: null,
        professional: null,
    },

];


export const ROLES: Role[] = [
    {
        id: 1,
        nome: 'SA',
        brc: '5632455',
        descricao: 'System Analyst',
        nivel: 9,
    }
];


export const CUSTOMERS: Customer[] = [
    {
        id: 1,
        name: 'Santander',
        contact: 'Sales',
        email: 'sales@santander.com',
        sponsor: 'D',
    }
];

export const PROFESSIONALS: Professional[] = [
    {
        id: 1,
        pid: 10908991,
        eid: 10908991,
        name: 'Douglas Masson',
        email: 'd.masson.soares@avanade.com',
        phone: 99999999,
        role: 'SA'
    }
];

export const PROJECTS: Project[] = [
{
        id: 1,
        name: 'Novo IBPJ',
        startDate: new Date('2016-03-01T02:00:00.0002'),
        endDate: new Date('2999-12-31T02:00:00.0002'),
        wbs: 'WAX3452',
        customer: 'Santander'
    }
];