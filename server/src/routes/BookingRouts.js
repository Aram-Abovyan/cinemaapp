const { Router } = require('express')
const BookingController = require('../controllers/BookingController')

class BookingRoutes {
  constructor() {
    this.router = Router({mergeParams: true})
    this.bookingController = new BookingController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/', this.bookingController.createBooking)
  }
}

module.exports = new BookingRoutes().router