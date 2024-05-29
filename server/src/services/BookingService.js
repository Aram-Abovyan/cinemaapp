const dbClient = require('../DBClient')

class BookingService {
  async createBooking(scheduleId, seatId) {
    return await dbClient.booking.create({
      data: {scheduleId, seatId}
    });
  }
}

module.exports = new BookingService();
