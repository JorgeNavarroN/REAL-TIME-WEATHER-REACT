import { Reloj } from "./components/reloj"
import { Weather } from './components/Wheater'
import { Container } from './components/Container'
import { LineForecast } from './components/LineForecast'
import { Buscador } from './components/Buscador'
import { useState, useEffect, useRef } from "react"
import { useCurrentDateTime } from './services/utils/hooks/UseCurrentDateTime'
import { Background } from "./components/Background"
import { BuscadorModal } from './components/BuscadorModal'
import { useBuscador } from "./services/utils/hooks/UseBuscador"

const getWeatherByCityName = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
  const json = await res.json()
  return {
    temp: json?.main?.temp,
    feels_like: json?.main?.feels_like,
    temp_min: json?.main?.temp_min,
    temp_max: json?.main?.temp_max,
    wind: json?.wind,
    humidity: json?.main?.humidity,
    sea_level: json?.main?.sea_level,
    grnd_level: json?.main?.grnd_level,
    clouds: json?.clouds?.all,
    weather: json?.weather[0],
    timezone: json?.timezone,
    ubic: json?.name + ' - ' + json?.sys?.country
  }
}

const useClima = (city = 'New York') => {
  const [cityName, setCityName] = useState(city)
  const [objClima, setObjClima] = useState({})

  useEffect(() => {
    getWeatherByCityName(cityName).then(setObjClima)
  }, [cityName])

  return { res: objClima, setCityName }
}

function App() {
  const { res, setCityName } = useClima()
  const { dateTime } = useCurrentDateTime({})
  const { isOpen, opacity, handleOpen, handleClose } = useBuscador()


  const handleSearchLocation = (inputRef) => {
    setCityName(inputRef.current.value)
  }

  return (
    <Background dateTime={dateTime} timezone={res.timezone}>
      <Weather nameClass="col-start-1 col-span-2 row-span-2" objClima={res} />
      <LineForecast nameClass="row-start-3 col-span-3 p-7" expandir></LineForecast>
      <article className="col-start-3 flex row-span-2 flex-col gap-5 h-full w-full">
        <Buscador onClickOpen={handleOpen} />
        <Container nameClass={'p-7'} expandir>
          <Reloj timezone={res.timezone} />
        </Container>
      </article>
      <BuscadorModal opacity={opacity} isOpen={isOpen} handleClose={handleClose} handleSearchLocation={handleSearchLocation} />
    </Background>
  )
}

export default App
