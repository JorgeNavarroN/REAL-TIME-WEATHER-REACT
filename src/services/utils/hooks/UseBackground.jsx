import { useEffect, useState } from 'react'
import { timeClassTurn } from '../TimeClassTurn'
import { getDateByTimezone } from '../DateByTimezone'

export const useBackground = ({ dateTime, timezone }) => {
  const { dateTimeOfLocate } = getDateByTimezone(dateTime, timezone)
  const hourUTCTimezone = dateTimeOfLocate.getUTCHours()
  const [background, setBackground] = useState(timeClassTurn[hourUTCTimezone])
  const [opacity, setOpacity] = useState(100)

  useEffect(() => {
    if (Number.isNaN(hourUTCTimezone)) return
    setOpacity(100)
    setTimeout(() => {
      setOpacity(0)
      setBackground(timeClassTurn[hourUTCTimezone])
    }, 700)
  }, [hourUTCTimezone])

  return { background, opacity }
}
