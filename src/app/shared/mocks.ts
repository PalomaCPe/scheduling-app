import { Booking } from '../booking/booking';
import { Project } from '../Project/project';

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

export const PROJECT: Project[] = [
    {

        projectId: 1,
        name: null,
        StartDate: new Date(),
        EndDate: new Date(),
        wbs:  null,
        customer: null,
        sponsor: null   
    }
];
