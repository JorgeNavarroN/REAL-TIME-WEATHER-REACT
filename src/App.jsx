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

const timeClassTurn = [
  'bg-gradient-to-bl from-blue-950 via-sky-950 to-yellow-700 min-h-screen',  // 06:00
  'bg-gradient-to-bl from-blue-950 via-sky-700 to-sky-400 min-h-screen',     // 07:00
  'bg-gradient-to-l from-sky-800 via-sky-600 to-sky-300 min-h-screen',       // 08:00
  'bg-gradient-to-l from-sky-600 via-sky-500 to-sky-300 min-h-screen',       // 09:00
  'bg-gradient-to-tl from-sky-600 via-sky-500 to-sky-200 min-h-screen',      // 10:00
  'bg-gradient-to-t from-sky-600 via-sky-500 to-sky-200 min-h-screen',       // 11:00
  'bg-gradient-to-t from-sky-600 via-sky-400 to-sky-100 min-h-screen',       // 12:00
  'bg-gradient-to-tr from-sky-600 via-sky-400 to-sky-100 min-h-screen',      // 13:00
  'bg-gradient-to-r from-sky-700 via-sky-400 to-sky-200 min-h-screen',       // 14:00
  'bg-gradient-to-r from-sky-700 via-sky-500 to-sky-200 min-h-screen',       // 15:00
  'bg-gradient-to-br from-sky-800 via-sky-600 to-sky-100 min-h-screen',      // 16:00
  'bg-gradient-to-br from-sky-800 via-sky-700 to-yellow-200 min-h-screen',   // 17:00
  'bg-gradient-to-b from-sky-800 via-sky-700 to-yellow-400 min-h-screen',    // 18:00
  'bg-gradient-to-bl from-blue-950 via-sky-950 to-sky-700 min-h-screen',     // 19:00
  'bg-gradient-to-l from-blue-950 via-blue-950 to-sky-950 min-h-screen',     // 20:00
  'bg-gradient-to-l from-blue-950 via-blue-950 to-blue-900 min-h-screen',    // 21:00
  'bg-gradient-to-tl from-slate-950 via-blue-950 to-blue-900 min-h-screen',  // 22:00
  'bg-gradient-to-t from-slate-950 via-blue-950 to-blue-900 min-h-screen',   // 23:00
  'bg-gradient-to-t from-slate-950 via-slate-950 to-blue-950 min-h-screen',  // 00:00
  'bg-gradient-to-tr from-slate-950 via-slate-950 to-blue-950 min-h-screen', // 01:00
  'bg-gradient-to-r from-slate-950 via-slate-950 to-blue-950 min-h-screen',  // 02:00
  'bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 min-h-screen',   // 03:00
  'bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 min-h-screen',  // 04:00
  'bg-gradient-to-b from-blue-950 via-blue-950 to-yellow-900 min-h-screen',  // 05:00
]
function App() {

  const getCurrentIndex = (hour) => {
    return hour === 6 ? 0 : hour === 7 ? 1 : hour === 8 ? 2 : hour === 9 ? 3 : hour === 10 ? 4 : 
    hour === 11 ? 5 : hour === 12 ? 6 : hour === 13 ? 7 : hour === 14 ? 8 : hour === 15 ? 9 : 
    hour === 16 ? 10 : hour === 17 ? 11 : hour === 18 ? 12 : hour === 19 ? 13 : hour === 20 ? 14 : 
    hour === 21 ? 15 : hour === 22 ? 16 : hour === 23 ? 17 : hour === 0 ? 18 : hour === 1 ? 19 : 
    hour === 2 ? 20 : hour === 3 ? 21 : hour === 4 ? 22 : 23
  }

  // Obtenemos la fecha y hora actual en tiempo real.
  const [fechaActual, setFechaActual] = useState(new Date());
  const [indice, setIndice] = useState(getCurrentIndex(fechaActual.getHours()));
  const [opacity, setOpacity] = useState(0);
  const [nextHours, setNextHours] = useState(fechaActual.getHours() + 1 > 23 ? 0 : fechaActual.getHours() + 1);

  const changeGradientRespectToTime = (hour) => {
    // const horaActual = fechaActual.getHours();
    const index = getCurrentIndex(hour);

    setNextHours(hour + 1 > 23 ? 0 : hour + 1);
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
    // console.log("Current Hours: " + currentHours, "Next Hours: " + nextHours);
    if (currentHours === nextHours) changeGradientRespectToTime(currentHours);
  })

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
    <div className={`${timeClassTurn[indice]}`}>
      {/* <Reloj fechaHoraActual={fechaActual} /> */}
      <div className={`bg-slate-950 bg-opacity-${opacity} min-h-screen transition-all duration-500 grid grid-cols-2 items-start gap-5 p-5`}>
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
