const dbClient = require('../DBClient')

class RoomService {
  async getAllRooms() {
    return await dbClient.room.findMany();
  }

  async getRoomById(id) {
    const query = {
      where: {id},
      include: {
        seats: {
          include: {
            bookings: {
              include: {
                schedule: true,
              },
            },
          },
        },
        schedules: {
          where: {
            startingAt: {gt: new Date()}
          },
          include: {
            movie: true
          }
        }
      },
    }

    return await dbClient.room.findUnique(query)
  }
}

module.exports = new RoomService();
