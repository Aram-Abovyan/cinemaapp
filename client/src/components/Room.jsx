import { useNavigate } from 'react-router-dom'

export const Room = ({ id, name }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/rooms/${id}`)
  }

  return (
    <div className="room">
      <p>{name}</p>
      <button onClick={handleClick}>enter</button>
    </div>
  )
}