import { useEffect, useState } from "react"
import { getWeatherByCityName } from "../WeatherByCityName"
import { getForecastByLonLat } from "../ForecastByLonLat"

export const useClima = ({ cityName }) => {
  const [objClima, setObjClima] = useState({})
  const [objForecast, setObjForecast] = useState({})
  
  const query = async ({city, lat, lon}) => {
    const response = city ? await getWeatherByCityName({city}) : await getWeatherByCityName({lat, lon})
    if (response.status === 404 || response.status === 500) {
      return response
    }
    getForecastByLonLat({ lat: response.coord.lat, lon: response.coord.lon }).then(setObjForecast)
    setObjClima(response)
    return response
  }

  useEffect(() => {
    getWeatherByCityName({ city: cityName }).then(setObjClima)
    getForecastByLonLat({ city: cityName } || { lat: 51.50853, lon: -0.125740}).then(setObjForecast)
  }, [cityName])

  return { res: objClima, resForecast: objForecast, query }
}
