const { Router } = require('express')
const RoomController = require('../controllers/RoomController')

class RoomRoutes {
  constructor() {
    this.router = Router()
    this.roomController = new RoomController()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get('/', this.roomController.getAllRooms)
    this.router.get('/:roomId', this.roomController.getRoomById)
  }
}

module.exports = new RoomRoutes().router