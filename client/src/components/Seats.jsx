import { useOutletContext } from 'react-router-dom'
import { Seat } from '../components/Seat'

export const Seats = () => {
  const { seats, setSeats } = useOutletContext();

  return (
    <div className='seats-container'>
      <h2>Seats</h2>
      {
        seats.map((row) => (
          <div key={row[0].row} className='row'>
            {row.map((seat) => (<Seat key={seat.id} seat={seat} setSeats={setSeats} />))}
          </div>
        ))
      }
    </div>
  )
}