import { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getRoomData } from '../api/roomApi'
import { Schedules } from '../components/Schedules'
import { formatSeatsData } from '../utils/room'

export const Room = () => {
  const { roomId } = useParams()
  const [schedules, setSchedules] = useState([])
  const [seats, setSeats] = useState([])

  useEffect(() => {
    getRoomData(roomId)
    .then(({
      schedules,
      seats
    }) => {
      setSchedules(schedules)
      setSeats(formatSeatsData(seats))
    })
  }, [])

  return (
    <div>
      <Schedules schedules={schedules} />
      <Outlet context={{seats, setSeats}} />
    </div>
  )
}