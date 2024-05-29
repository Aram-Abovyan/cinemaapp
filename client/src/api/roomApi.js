import axios from 'axios'

export const getRooms = () => {
  return axios.get('/api/rooms').then(({ data }) => data)
}

export const getRoomData = (roomId) => {
  return axios.get(`/api/rooms/${roomId}`).then(({ data }) => data)
}

export const createBooking = (scheduleId, seatId) => {
  return axios.post(`/api/bookings`, {scheduleId, seatId}).then(({ data }) => data)
}