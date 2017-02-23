import { Booking } from '../booking/booking';
import { Customer } from '../customer/customer';
import { Project } from '../Project/project';
import { Role } from '../role/Role';


export const BOOKINGS: Booking[] = [
    {
        id: 1,
        projectId: 1,
        professionalId: 1,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 100,
        professional: null,
        project: null
    },
    {
        id: 2,
        projectId: 2,
        professionalId: 2,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 90,
        professional: null,
        project: null
    },
    {
        id: 3,
        projectId: 3,
        professionalId: 3,
        startDate: new Date(),
        endDate: new Date(),
        bookingPercentual: 95,
        professional: null,
        project: null
    }
];

export const CUSTOMERS: Customer[] = [
    {
        id: 1,
        name: 'Talarico',
        contact: 'talala',
        email: 'r.talarico.gomes@avanade.com',
        sponsor: null
    },
    {
        id: 2,
        name: 'Geraldo',
        contact: 'gege',
        email: 'geraldo.f.neto@accenture.com',
        sponsor: null
    },
    {
        id: 3,
        name: 'Salata',
        contact: 'sasá',
        email: 'lucas.ramalho.salata@avanade.com',
        sponsor: null
    }
];

export const PROJECTS: Project[] = [
    {

        projectId: 1,
        name: 'teste1',
        StartDate: new Date(),
        EndDate: new Date(),
        wbs:  '12345',
        customer: null,
        sponsor: null   
    },

    {
        projectId: 2,
        name: 'teste',
        StartDate: new Date(),
        EndDate: new Date(),
        wbs:  '12345',
        customer: null,
        sponsor: null   
    }
];

export const ROLES: Role[]=[
    {
        id: 1,
        name: 'Associated Software Engineer',
        brc: '',
        description: 'ASE - Associated Software Engineer',
        level: 12
    },
    {
        id: 2,
        name: 'Software Engineer',
        brc: '',
        description: 'SE - Software Engineer',
        level: 11
    },
    {
        id: 3,
        name: 'Senior Software Engineer',
        brc: '',
        description: 'SSE - Senior Software Engineer',
        level: 10
    },
    {
        id: 4,
        name: 'System Analyst',
        brc: '',
        description: 'SA - System Analyst',
        level: 9
    },
    {
        id: 5,
        name: 'Senior System Analyst',
        brc: '',
        description: 'SSA - Senior System Analyst',
        level: 8
    },
    {
        id: 6,
        name: 'Manager',
        brc: '',
        description: 'MGR - Manager',
        level: 7
    },
    {
        id: 7,
        name: 'Group Manager',
        brc: '',
        description: 'GMR - Group Manager',
        level: 6
    },
    {
        id: 8,
        name: 'Director',
        brc: '',
        description: 'DRT - Director',
        level: 5
    },
    {
        id: 9,
        name: 'Group Director',
        brc: '',
        description: 'GDR - Group Director',
        level: 4
    },
    {
        id: 10,
        name: 'Vice President',
        brc: '',
        description: 'VP - Vice President',
        level: 3
    },
    {
        id: 11,
        name: 'President',
        brc: '',
        description: 'PST - President',
        level: 2
    }
];