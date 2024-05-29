const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seatsData1 = createSeatsData(3, 4) //10x8
const seatsData2 = createSeatsData(4, 5)
const seatsData3 = createSeatsData(5, 2)

const roomsData = [
  {
    name: 'red',
    seats: {
      createMany: {
        data: seatsData1
      }
    }
  },
  {
    name: 'blue',
    seats: {
      createMany: {
        data: seatsData2
      }
    }
  },
  {
    name: 'green',
    seats: {
      createMany: {
        data: seatsData3
      }
    }
  }
]

const moviesData = [
  {
    name: 'The Adventures of Baron Munchausen',
    duration: 90
  },
  {
    name: 'Requiem for a Dream',
    duration: 80
  },
  {
    name: 'The Matrix',
    duration: 100
  },
  {
    name: 'The Jacket',
    duration: 90
  },
  {
    name: 'Fight Club',
    duration: 60
  },
  {
    name: 'The Godfather',
    duration: 120
  },
]

async function main() {
  const rooms = []

  for (let roomData of roomsData) {
    const room = await prisma.room.create({
      data: roomData
    })

    rooms.push(room)
  }

  const movies = await prisma.movie.createManyAndReturn({
    data: moviesData
  })

  const createRoomSchedulesData = getRoomScheduleDataCreator()

  for (let i = 0; i < rooms.length; i++) {
    const { id: roomId } = rooms[i]
    const currentRoomMovies = movies.slice(i, i + 4)

    const roomSchedulesData = createRoomSchedulesData(currentRoomMovies, roomId)

    await prisma.schedule.createMany({
      data: roomSchedulesData
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

function createSeatsData(rowCount, columnCount) {
  const result = []

  for (let i = 1; i <= rowCount; i++) {
    for (let j = 1; j <= columnCount; j++) {
      result.push({row: i, column: j})
    }
  }

  return result
}

function getRoomScheduleDataCreator() {
  const currentDate = new Date();

  const tommorowSchedules = [
    tomorrow12am = createTomorrowDate(0, 0),
    tomorrow2pm = createTomorrowDate(14, 0),
    tomorrow430pm = createTomorrowDate(16, 30),
    tomorrow7pm = createTomorrowDate(19, 0),
  ]

  return function(movies, roomId) {
    return movies.map(({ id }, i) => ({
      startingAt: tommorowSchedules[i],
      roomId,
      movieId: id,
      // room: {connect: {id: roomId}},
      // movie: {connect: {id}}
    }))
  }

  function createTomorrowDate(hour, minute) {
    let date = new Date(currentDate);
    date.setDate(currentDate.getDate() + 1);
    date.setHours(hour, minute, 0, 0);
    return date;
  }
}
