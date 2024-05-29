import { useState, useEffect } from 'react'
import { Room } from '../components/Room'
import { getRooms } from '../api/roomApi'

export const Root = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    getRooms()
    .then(rooms => setRooms(rooms))
  }, [])

  return (
    <div>
      <ul className='room-list'>
        {rooms?.map(({ id, name }) => (<li key={id}><Room {...{id, name}} /></li>))}
      </ul>
    </div>
  )
}
