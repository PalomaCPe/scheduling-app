import { Booking } from '../booking/booking';
import { Costumer } from '../costumer/costumer';
import { Project } from '../project/project';


export const BOOKINGS: Booking[] =[
    {  
         id: 1,
         startDate: new Date('Wednesday, February 20, 2017'),
         endDate: new Date(),
         percentual: 10,
         projectId: 1,
         professionalId: 3,
         project: null,
         professional: null,
    },
    {
         id: 2,
         startDate: new Date('January 1, 1970, 00:00:00 UTC'),
         endDate: new Date(),
         percentual: 3,
         projectId: 4,
         professionalId: 5,
         project: null,
         professional: null,
    },
    {
        id: 4,
         startDate: new Date(),
         endDate: new Date(),
         percentual: 7,
         projectId: 2,
         professionalId: 4,
         project: null,
         professional: null,
    },
    
];

export const COSTUMERS: Costumer[]=[
    {
        name: 'costumer1',
        contact: 'joe',
        email: 'costumer1@mail.com',
        sponsor:  'esse cara ai'
    },
    {
        name: 'costumer2',
        contact: 'joseph',
        email: 'costumer2@mail.com',
        sponsor:  'aquele cara la'
    },

];

export const PROJECTS: Project[]=[
    {
        id :  '123',
    	name :  '321',
        start_date :  'p.josephclimber@prservicos.com.br',
    	end_date :  'joseph climber',
    	wbs:  'josephclimber@mail.com',
    	customer: '2345678',
    	sponsor: '2345678'
    },
    {
        id :  '13',
    	name :  '31',
        start_date :  'p.josephclimber@prservicos.com.br',
    	end_date :  'joseph climber',
    	wbs:  'josephclimber@mail.com',
    	customer: '2345678',
    	sponsor: '2345678'
    },

]
