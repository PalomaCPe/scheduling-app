import { Booking } from '../booking/booking';

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
    }
    
];
