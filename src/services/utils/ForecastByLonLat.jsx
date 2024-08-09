import { getDaysForecast } from "./DaysForecast"

export const getForecastByLonLat = async ({ city, lat, lon }) => {
  const res = await fetch(`/api/data/2.5/forecast?${ city ? `q=${city}` : `lat=${lat}&lon=${lon}`}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
  const json = await res.json()
  const daysFormated = getDaysForecast({ listForecast: json?.list })
  return {
    status: res.status,
    coord: json?.city?.coord,
    days: daysFormated,
  }
}