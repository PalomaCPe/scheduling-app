import { Booking } from '../booking/booking';
import { Role } from '../role/role';

export const BOOKINGS: Booking[] = [
    {
        id: 1,
        startDate: new Date("2017-01-01"),
        endDate: new Date("2017-01-01"),
        percentual: 10,
        projectId: 1,
        professionalId: 3,
        project: null,
        professional: null,
    },
    {
        id: 2,
        startDate: new Date("2017-01-01"),
        endDate: new Date("2017-01-01"),
        percentual: 20,
        projectId: 1,
        professionalId: 3,
        project: null,
        professional: null,
    },
    {
        id: 3,
        startDate: new Date("2017-01-01"),
        endDate: new Date("2017-01-01"),
        percentual: 50,
        projectId: 1,
        professionalId: 3,
        project: null,
        professional: null,
    }
]

export const ROLES: Role[] = [
    {
        id: 1,
        name: 'DEVOPS',
        brc : 'teste',
        description : 'Role Teste',
        level: 1,
    },
    {
        id: 2,
        name: 'DEVOPS',
        brc : 'teste',
        description : 'Role Teste2',
        level: 10,
    }
]