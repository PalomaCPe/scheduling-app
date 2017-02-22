import  { booking } from '../booking/booking';

export const BOOKINGS: Booking[] = [ 
    {
        id: 2,
        startDate: new Date("2017-01-01T02:00:00.000Z"),
        endDate: new Date("2017-01-01T02:00:00.000Z"),
        percentual: 30,
        projectId: 2,
        professionalId: 2,
        project: null ,
        professional: null,
    },
       {
        id: 3,
        startDate: new Date("2017-01-01T02:00:00.000Z"),
        endDate: new Date("2017-01-01T02:00:00.000Z"),
        percentual: 60,
        projectId: 3,
        professionalId: 3,
        project: null ,
        professional: null,
    },
   {
        id: 1,
        startDate: new Date("2017-01-01T02:00:00.000Z"),
        endDate: new Date("2017-01-01T02:00:00.000Z"),
        percentual: 10,
        projectId: 1,
        professionalId: 1,
        project: null ,
        professional: null,
    }
]