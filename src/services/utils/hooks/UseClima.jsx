import { useEffect, useState } from "react"
import { getWeatherByCityName } from "../WeatherByCityName"
import { getForecastByLonLat } from "../ForecastByLonLat"

export const useClima = ({ coords }) => {
  const [objClima, setObjClima] = useState({})
  const [objForecast, setObjForecast] = useState({})
  const query = async ({ cityName, lat, lon }) => {
    const response = cityName ? await getWeatherByCityName({ city: cityName }) : await getWeatherByCityName({ lat, lon })
    if (response.status === 404 || response.status === 500) {
      return response
    }
    if (cityName) {
      getForecastByLonLat({ city: cityName }).then(setObjForecast)
    } else {
      getForecastByLonLat({ lat: response.coord.lat, lon: response.coord.lon }).then(setObjForecast)
    }
    setObjClima(response)
    return response
  }

  useEffect(() => {
    getWeatherByCityName({ lat: coords.lat, lon: coords.lon }).then(setObjClima)
    getForecastByLonLat({ lat: coords.lat, lon: coords.lon }).then(setObjForecast)
  }, [])

  return { res: objClima, resForecast: objForecast, query }
}
