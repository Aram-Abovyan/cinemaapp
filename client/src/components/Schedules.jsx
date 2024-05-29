import { useState } from 'react'
import { Schedule } from './Schedule'
import { useParams } from 'react-router-dom'

export const Schedules = ({schedules}) => {
  const { scheduleId } = useParams()
  const [selectedScheduleId, setSelectedScheduleId] = useState(+scheduleId)

  return (
    <div className='schedules'>
      <fieldset>
        <legend>Select a movie to see available seats</legend>
        {
          schedules.map((schedule) => (
            <Schedule
              key={schedule.id}
              schedule={schedule}
              selected={selectedScheduleId === schedule.id}
              setSelectedScheduleId={setSelectedScheduleId}
            />
          ))
        }
      </fieldset>
    </div>
  )
}