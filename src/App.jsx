import { Reloj } from "./components/reloj"
import { Weather } from './components/Weather'
import { Container } from './components/Container'
import { LineForecast } from './components/LineForecast'
import { Buscador } from './components/Buscador'
import { useCurrentDateTime } from './services/utils/hooks/UseCurrentDateTime'
import { Background } from "./components/Background"
import { BuscadorModal } from './components/BuscadorModal'
import { useBuscador } from "./services/utils/hooks/UseBuscador"
import { useLocalstorage } from "./services/utils/hooks/UseLocalStorage"

function App() {
  const { dateTime } = useCurrentDateTime({})
  const { res, resForecast, isOpen, opacity, handleBuscar, handleBuscarUbicacionActual, handleOpen, handleClose } = useBuscador()

  // console.log("Render")

  return (
    <Background dateTime={dateTime} timezone={res.timezone}>
      <Weather nameClass="col-start-1 col-span-2 row-span-2" objClima={res} />
      <LineForecast daysForecast={resForecast} nameClass="row-start-3 col-span-3 p-7" expandir></LineForecast>
      <article className="col-start-3 flex row-span-2 flex-col gap-5 h-full w-full">
        <Buscador onClickOpen={handleOpen} handleClickGeoLocation={handleBuscarUbicacionActual} />
        <Container nameClass={'p-7'} expandir>
          <Reloj timezone={res.timezone} />
        </Container>
      </article>
      {!isOpen && <BuscadorModal opacity={opacity} handleClose={handleClose} handleSearch={handleBuscar} />}
    </Background>
  )
}

export default App
