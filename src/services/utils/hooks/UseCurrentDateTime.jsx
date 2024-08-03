import { useEffect, useState } from 'react'

// TODO: CUSTOM HOOK QUE PERMITE OBTENER LA FECHA Y HORA ACTUALES EN CONSTANTE ACTUALIZACION.
export const useCurrentDateTime = ({ inUTC = false }) => {
  const [dateTime, setDateTime] = useState(new Date()) // ESTADO DE LA FECHA ACTUAL
  const [hoursUTC, setHours] = useState(dateTime.getUTCHours()) // HORAS DE LA FECHA ACTUAL EN FORMATO UTC
  const [nextHoursUTC, setNextHours] = useState(hoursUTC + 1 > 23 ? 0 : hoursUTC + 1) // FACTOR DE HORA CONTINUO REFERENTE A LA HORA ACTUAL EN FORMATO UTC
  const [minutesUTC, setMinutes] = useState(dateTime.getUTCMinutes()) // MINUTOS DE LA FECHA ACTUAL EN FORMATO UTC
  const [nextMinutesUTC, setNextMinutes] = useState(minutesUTC + 1 > 59 ? 0 : minutesUTC + 1) // FACTO DE MINUTO CONTINUO REFERENTE A LOS MINUTOS ACTUALES EN FORMATO UTC
  const [secondsUTC, setSeconds] = useState(dateTime.getUTCSeconds()) // SEGUNDOS DE LA FECHA ACTUAL EN FORMATO UTC

  // TODO: METODO QUE ACTUALIZA LOS ESTADOS
  const handleMinutes = () => {
    const newDateTime = new Date()
    setDateTime(newDateTime)
    setMinutes(newDateTime.getUTCMinutes())
    setHours(newDateTime.getUTCHours())
    setSeconds(newDateTime.getUTCSeconds())
  }

  // TODO: USE EFFECT QUE PERMITE VALIDAR EL CAMBIO DE HORA
  useEffect(() => {
    if (hoursUTC === nextHoursUTC) {
      setNextHours(dateTime.getUTCHours() + 1 > 23 ? 0 : hoursUTC + 1)
    }
  }, [hoursUTC])

  // TODO: USE EFFECT QUE PERMITE VALIDAR EL CAMBIO DE MINUTOS
  useEffect(() => {
    if (minutesUTC === nextMinutesUTC) {
      setMinutes(dateTime.getUTCMinutes())
      setNextMinutes(dateTime.getUTCMinutes() + 1 > 59 ? 0 : minutesUTC + 1)
    }
  }, [minutesUTC])

  // TODO: USE EFFECT QUE PERMITE LA ACTUALIZACION DE LA FECHA Y HORA ACTUAL CADA 1 SEGUNDO
  useEffect(() => {
    const intervalId = setInterval(handleMinutes, 1000)
    return () => clearInterval(intervalId)
  }, [])

  // TODO: RETORNO DE ESTADOS
  if (inUTC) return { hoursUTC, minutesUTC, secondsUTC, dateTime }
  return { hours: dateTime.getHours(), minutes: dateTime.getMinutes(), seconds: dateTime.getSeconds(), dateTime }
}
