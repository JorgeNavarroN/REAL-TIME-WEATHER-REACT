import { useEffect, useState } from "react"
import { getWeatherByCityName } from "../WeatherByCityName"
import { getForecastByLonLat } from "../ForecastByLonLat"

export const useClima = () => {
  const [objClima, setObjClima] = useState({})
  const [objForecast, setObjForecast] = useState({})
  
  const query = async (city) => {
    const response = await getWeatherByCityName(city)
    if (response.status === 404 || response.status === 500) {
      console.log('Estado: ', response.status)
      return response.status
    }
    getForecastByLonLat({ lat: response.coord.lat, lon: response.coord.lon }).then(setObjForecast)
    setObjClima(response)
    return response.status
  }

  useEffect(() => {
    getWeatherByCityName('Londres').then(setObjClima)
    getForecastByLonLat({ lat: 51.50853, lon: -0.125740}).then(setObjForecast)
  }, [])

  return { res: objClima, resForecast: objForecast, query }
}
