import { useParams } from 'react-router-dom'
import { createBooking } from '../api/roomApi'


export const Seat = ({
  seat: { id: seatId, row, column, bookings },
  setSeats
}) => {
  const { scheduleId } = useParams()
  const reserved = bookings.some(({ scheduleId: id }) => +scheduleId === id)

  const handleClick = async () => {
    const booking = await createBooking(scheduleId, seatId)
    setSeats(prevSeats => {
      const newRow = prevSeats[row - 1].map(seat => {
        if (seat.id === seatId) {
          seat.bookings.push(booking)
        }

        return seat
      })

      prevSeats[row - 1] = newRow
      return [...prevSeats]
    })
  }

  return (
    <div className={`seat ${reserved ? 'reserved' : ''}`}>
      <p>{`${row}/${column}`}</p>
      <button disabled={reserved} onClick={handleClick}>reserve</button>
    </div>
  )
}