import { Router, Response, Request } from 'express';
import { BookingApplication } from '../application/booking.application';
import { Booking } from '../model/booking';

export const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.getBookings().then((resultado: Booking[]) => {
        response.json(resultado);
    });

})