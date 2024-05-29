const RoomService = require('../services/RoomService')

class RoomController {
  getAllRooms = async (req, res) => {
    const rooms = await RoomService.getAllRooms()
    res.json(rooms);
  };

  getRoomById = async (req, res) => {
    const room = await RoomService.getRoomById(Number(req.params.roomId))
    res.json(room)
  }
}

module.exports = RoomController;
