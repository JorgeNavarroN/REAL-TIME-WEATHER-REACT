export const getDateByTimezone = (dateTime, offsetSegundos) => {
  const offsetMilisegundos = offsetSegundos * 1000
  const dateTimeOfLocate = new Date(dateTime.getTime() + offsetMilisegundos)

  const optionsDate = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }
  const optionsTime = { timeZone: 'UTC', hour: 'numeric', minute: 'numeric' }
  const horaFormateada = dateTimeOfLocate.toLocaleTimeString(undefined, optionsTime)
  const fechaFormateada = dateTimeOfLocate.toLocaleDateString(undefined, optionsDate)
  return { horaFormateada, dateTimeOfLocate, fechaFormateada }
}
