
export const formatSeatsData = (seatsData) => {
  const result = {}

  for (let seatData of seatsData) {
    const { row } = seatData

    if (result[row]) {
      result[row].push(seatData)
      continue
    }

    result[row] = [seatData]
  }

  return Object.values(result)
}

