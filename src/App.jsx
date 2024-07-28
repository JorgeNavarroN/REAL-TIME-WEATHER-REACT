import { Reloj } from "./components/reloj"
import { Weather } from './components/Wheater'
import { Container } from './components/Container'
import { LineForecast } from './components/LineForecast'
import { Buscador } from './components/Buscador'
import { useState, useEffect } from "react"

// TODO: [0] horas -> 11:00, 23:00, 00:00, 12:00
// TODO: [1] horas -> 01:00, 13:00
// TODO: [2] horas -> 02:00, 14:00, 03:00, 15:00
// TODO: [3] horas -> 04:00, 16:00
// TODO: [4] horas -> 05:00, 17:00, 06:00, 18:00
// TODO: [5] horas -> 07:00, 19:00
// TODO: [6] horas -> 08:00, 20:00, 09:00, 21:00
// TODO: [7] horas -> 10:00, 22:00

const timeClassTurn = ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
function App() {

  const getCurrentIndex = (hour) => {
    return hour == 11 || hour == 12 || hour == 23 || hour == 0 ? 0
      : hour == 1 || hour == 13 ? 1
        : hour == 2 || hour == 14 || hour == 3 || hour == 15 ? 2
          : hour == 4 || hour == 16 ? 3
            : hour == 5 || hour == 17 || hour == 6 || hour == 18 ? 4
              : hour == 7 || hour == 19 ? 5
                : hour == 8 || hour == 20 || hour == 9 || hour == 21 ? 6
                  : 7
  }

  // Obtenemos la fecha y hora actual en tiempo real.
  const [fechaActual, setFechaActual] = useState(new Date());
  const [indice, setIndice] = useState(getCurrentIndex(fechaActual.getHours()));
  const [opacity, setOpacity] = useState(0);
  const [hours, setHours] = useState(fechaActual.getHours());

  const changeGradientRespectToTime = (hour) => {
    // const horaActual = fechaActual.getHours();
    const index = getCurrentIndex(hour);

    setHours(hour);
    setOpacity(100);
    setTimeout(() => {
      setOpacity(0)
      setIndice(index); // prev => prev < timeClassTurn.length - 1 ? prev + 1 : 0
    }, 700);
  }

  const handleFechaActual = () => {
    setFechaActual(new Date());
  }

  useEffect(() => {
    const currentHours = fechaActual.getHours();
    if (currentHours === hours + 1 && fechaActual.getSeconds() === 0) {
      changeGradientRespectToTime(currentHours);
    }
  }, [fechaActual, hours])

  useEffect(() => {

    // Establecemos un intervalo para actualizar la fecha y hora cada segundo.
    const intervalId = setInterval(handleFechaActual, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta.
    return () => {
      clearInterval(intervalId)
    };

  });

  // Definimos las opciones para la fecha y hora.

  return (
    <div className={`bg-gradient-to-${timeClassTurn[indice]} from-indigo-950 via-indigo-900 to-sky-600`}>
      {/* <Reloj fechaHoraActual={fechaActual} /> */}
      <div className={`bg-indigo-950 bg-opacity-${opacity} min-h-screen transition-all duration-500 grid grid-cols-2 items-start gap-5 p-5`}>
        <Weather nameClass="col-start-1 col-span-2 row-span-2"></Weather>
        <LineForecast nameClass="row-start-3 col-span-3 p-7" expandir></LineForecast>
        <article className="col-start-3 flex row-span-2 flex-col gap-5 h-full w-full">
          <Buscador></Buscador>
          <Container nameClass={'p-7'} expandir>
            <Reloj fechaHoraActual={fechaActual} />
          </Container>
        </article>
      </div>
    </div>
  )
}

export default App
