import { Booking } from '../booking/booking'

export const BOOKINGS: Booking[] = [
    {
        id: 1,
        startDate: new Date("2017-03-11T02:00:00.0002"),
        endDate: new Date("2017-03-18T02:00:00.0002"),
        percentual: 10,
        projectId: 1,
        professionalId: 1,
        //project: null,
        //professional: null,
    },
    {
        id: 2,
        startDate: new Date("2017-03-14T02:00:00.0002"),
        endDate: new Date("2017-03-22T02:00:00.0002"),
        percentual: 15,
        projectId: 2,
        professionalId: 2,
        //project: null,
        //professional: null,
    },
    {
        id: 3,
        startDate: new Date("2017-03-22T02:00:00.0002"),
        endDate: new Date("2017-03-30T02:00:00.0002"),
        percentual: 20,
        projectId: 3,
        professionalId: 3,
        //project: null,
        //professional: null,
    }
];