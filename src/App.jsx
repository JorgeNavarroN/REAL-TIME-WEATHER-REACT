import { Reloj } from "./components/reloj"
import { Weather } from './components/Weather'
import { Container } from './components/Container'
import { LineForecast } from './components/LineForecast'
import { Buscador } from './components/Buscador'
import { useCurrentDateTime } from './services/utils/hooks/UseCurrentDateTime'
import { Background } from "./components/Background"
import { BuscadorModal } from './components/BuscadorModal'
import { useBuscador } from "./services/utils/hooks/UseBuscador"

function App() {
  const { dateTime } = useCurrentDateTime({})
  const { res, resForecast, isOpen, opacity, handleBuscar, handleBuscarUbicacionActual, handleOpen, handleClose } = useBuscador()

  return (
    <Background dateTime={dateTime} timezone={res.timezone}>
      <article className="xl:col-start-2 flex xl:row-span-2 xl:row-start-1 flex-col gap-5 h-full w-full">
        <Buscador onClickOpen={handleOpen} handleClickGeoLocation={handleBuscarUbicacionActual} />
        <Container nameClass={'p-7 justify-center'} expandir>
          <Reloj timezone={res.timezone} />
        </Container>
      </article>
      <Weather nameClass="xl:col-start-1 xl:row-start-1 xl:row-span-2" objClima={res} />
      <LineForecast daysForecast={resForecast} nameClass="xl:col-start-1 xl:col-span-2 grid p-7" expandir></LineForecast>
      {!isOpen && <BuscadorModal opacity={opacity} handleClose={handleClose} handleSearch={handleBuscar} />}
    </Background>
  )
}

export default App
