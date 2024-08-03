import { useEffect, useState } from "react"
import { getWeatherByCityName } from "../WeatherByCityName"

export const useClima = () => {
  const [objClima, setObjClima] = useState({})

  const query = async (city) => {
    const response = await getWeatherByCityName(city)
    if (response.status === 404) {
      console.log('Estado: ', response.status)
      return response.status
    }
    setObjClima(response)
    return response.status
  }

  useEffect(() => {
    getWeatherByCityName('Londres').then(setObjClima)
  }, [])

  return { res: objClima, query }
}
