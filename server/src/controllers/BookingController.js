const BookingService = require('../services/BookingService')

class BookingController {
  createBooking = async (req, res) => {
    const booking = await BookingService.createBooking(Number(req.body.scheduleId), Number(req.body.seatId))
    res.json(booking);
  };
}

module.exports = BookingController
