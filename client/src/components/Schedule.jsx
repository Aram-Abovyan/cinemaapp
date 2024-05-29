import { useNavigate } from 'react-router-dom'

export const Schedule = ({
  schedule,
  selected,
  setSelectedScheduleId
}) => {
  const { movie } = schedule
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`./schedules/${schedule.id}`, { relative: "path" })
    setSelectedScheduleId(schedule.id)
  }

  return (
    <div>
      <input
        type="radio"
        value={movie.name}
        name={movie.name}
        onChange={handleClick}
        checked={selected}
      />
      <label>{movie.name} |::::| starts at: {new Date(schedule.startingAt).toString()}</label>
    </div>
  )
}