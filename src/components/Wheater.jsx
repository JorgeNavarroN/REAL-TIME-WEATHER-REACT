import { Container } from "./Container";
import PropTypes from 'prop-types'

const getWindDirection = (deg) => {
    if (deg > 350 && deg < 10) {
        return 'Norte'
    } else if (deg <= 350 && deg >= 280) {
        return 'N-Oeste'
    } else if (deg < 280 && deg > 260) {
        return 'Oeste'
    } else if (deg <= 260 && deg >= 190) {
        return 'S-Oeste'
    } else if (deg < 190 && deg > 170) {
        return 'Sur'
    } else if (deg <= 170 && deg >= 100) {
        return 'S-Este'
    } else if (deg < 100 && deg > 80) {
        return 'Este'
    } else if (deg <= 80 && deg >= 10) {
        return 'N-Este'
    } else {
        return 'Norte'
    }
}

const capitalizarTexto = (str) => {
    if (typeof str !== 'string' || str.length === 0) return
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const Weather = ({ nameClass, objClima }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="flex flex-col gap-5 place-content-between h-full w-full p-7">
                <span className="flex gap-x-2 items-center">
                    <p className="text-2xl">{objClima.ubic}</p>
                    <img src="/src/assets/location-32.png" alt="location.png" />
                </span>
                <p className="text-8xl">{Math.round(objClima.temp)}°C</p>
                <span className="text-4xl">{objClima.feels_like}°C</span>
                <span className="text-2xl">{objClima.temp_min}°C min / {objClima.temp_max}°C max</span>
            </section>
            <section className="box-border bg-slate-900 bg-opacity-50 col-start-2 px-10 place-content-center">
                <ul className="text-md grid gap-2 gap-x-10 gap-y-5">
                    <li className="col-start-1 grid gap-y-2">
                        <span>Viento:</span>
                        <span className="flex col-start-1 row-start-2 gap-2 place-content-center items-center">
                            <img src="/src/assets/wind-32.png" alt="wind.png" />
                            <p className="text-lg">{objClima?.wind?.speed}m/s</p>
                        </span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img style={{transform: `rotate(${objClima?.wind?.deg}deg)`}} src="/src/assets/compass-north-32.png" alt="compass.png" />
                            <p className="text-xl col-span-2 col-start-1 row-start-3">{getWindDirection(objClima?.wind?.deg)}</p>
                        </span>
                    </li>
                    <li className="col-start-2 grid">
                        <span>Humedad:</span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img className="min-h-fit my-auto" src="/src/assets/wet-32.png" alt="wind.png" />
                            <p className="text-3xl">{objClima.humidity}%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span>Nivel del mar:</span>
                        <p className="text-3xl flex place-content-center">{objClima.sea_level}<span className="text-lg content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span>Nivel del suelo:</span>
                        <p className="text-3xl flex place-content-center">{objClima.grnd_level}<span className="text-lg content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span>Nubosidad:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img src="/src/assets/clouds-50.png" alt="wind.png" />
                            <p className="text-3xl grid place-content-center">{objClima.clouds}%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span>Clima:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img className="col-start-1" src={`http://openweathermap.org/img/wn/${objClima?.weather?.icon}.png`} alt="" />
                            <p className="text-xl place-content-center col-start-2">{capitalizarTexto(objClima?.weather?.description)}</p>
                        </span>
                    </li>
                </ul>
            </section>
        </Container>
    )
};

Weather.propTypes = {
    nameClass: PropTypes.string,
    objClima: PropTypes.object
}