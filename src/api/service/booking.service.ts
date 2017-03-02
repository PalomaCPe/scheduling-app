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

bookingRouter.get('/:id', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();
    let id: number = +request.params.id;

    bookingApplication.getBooking(id).then((resultado: Booking) => {
        response.json(resultado);
    });
})