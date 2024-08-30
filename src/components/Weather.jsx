import { capitalizarTexto } from "../services/utils/CapitalizarTexto";
import gps40 from "../assets/gps-40.png"
import wind32 from "../assets/wind-32.png"
import wet32 from "../assets/wet-32.png"
import clouds50 from "../assets/clouds-50.png"
import compass32 from "../assets/compass-north-32.png"

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

export const Weather = ({ nameClass, objClima }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="flex flex-col gap-5 place-content-between h-full w-full p-7 transition-all">
                <span className="flex gap-x-2 items-center">
                    <img src={gps40} alt="location.png" />
                    <p className="text-2xl">{objClima.ubic || 'Globe' }</p>
                    <img src={`https://flagsapi.com/${objClima.country}/flat/64.png`} width={32} height={32} alt="" />
                </span>
                <p className="text-8xl">{Math.round(objClima.temp)}°C</p>
                <span className="text-4xl">{objClima.feels_like}°C</span>
                <span className="text-2xl">{objClima.temp_min}°C min / {objClima.temp_max}°C max</span>
            </section>
            <section className="box-border bg-slate-900 bg-opacity-50 col-start-2 w-full px-10 max-xl:py-10 place-content-center">
                <ul className="text-md grid gap-2 gap-x-10 gap-y-5">
                    <li className="col-start-1 grid gap-y-2">
                        <span className="max-sm:text-sm">Viento:</span>
                        <span className="flex col-start-1 row-start-2 gap-2 place-content-center items-center">
                            <img src={wind32} alt="wind.png" />
                            <p className="text-lg max-sm:text-base">{objClima?.wind?.speed}m/s</p>
                        </span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img style={{transform: `rotate(${objClima?.wind?.deg}deg)`}} src={compass32} alt="compass.png" />
                            <p className="text-xl max-sm:text-xs col-span-2 col-start-1 row-start-3">{getWindDirection(objClima?.wind?.deg)}</p>
                        </span>
                    </li>
                    <li className="col-start-2 grid">
                        <span className="max-sm:text-sm">Humedad:</span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img className="min-h-fit my-auto" src={wet32} alt="wind.png" />
                            <p className="text-3xl max-sm:text-lg">{objClima.humidity}%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span className="max-sm:text-sm">Nivel del mar:</span>
                        <p className="text-3xl max-sm:text-xl flex place-content-center">{objClima.sea_level}<span className="text-lg max-sm:text-sm content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span className="max-sm:text-sm">Nivel del suelo:</span>
                        <p className="text-3xl max-sm:text-xl flex place-content-center">{objClima.grnd_level}<span className="text-lg max-sm:text-sm content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span className="max-sm:text-sm">Nubosidad:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img src={clouds50} alt="wind.png" />
                            <p className="text-3xl max-sm:text-xl grid place-content-center">{objClima.clouds}%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span className="max-sm:text-sm">Clima:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img className="col-start-1" src={`http://openweathermap.org/img/wn/${objClima?.weather?.icon}.png`} alt={objClima?.weather?.description} />
                            <p className="text-xl max-sm:text-sm place-content-center col-start-2">{capitalizarTexto(objClima?.weather?.description)}</p>
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