const { Router } = require('express')
const roomRoutes = require('./RoomRoutes')
const bookingRoutes = require('./BookingRouts')

class RootRouter {
  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.use('/rooms', roomRoutes)
    this.router.use('/bookings', bookingRoutes)
  }
}

module.exports = new RootRouter().router