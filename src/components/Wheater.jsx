import { Container } from "./Container";
import PropTypes from 'prop-types'


export const Weather = ({ nameClass }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="flex flex-col gap-5 place-content-between h-full w-full p-7">
                <span className="flex gap-x-2 items-center">
                    <p className="text-2xl">Paita - Perú</p>
                    <img src="/src/assets/location-32.png" alt="location.png" />
                </span>
                <p className="text-8xl">22.5°C</p>
                <span className="text-4xl">19.4°C</span>
                <span className="text-2xl">19.4°C min / 19.5°C max</span>
            </section>
            <section className="box-border bg-slate-900 bg-opacity-50 col-start-2 px-10 place-content-center">
                <ul className="text-md grid gap-2 gap-x-10 gap-y-5">
                    <li className="col-start-1 grid gap-y-2">
                        <span>Viento:</span>
                        <span className="flex col-start-1 row-start-2 gap-2 place-content-center items-center">
                            <img src="/src/assets/wind-32.png" alt="wind.png" />
                            <p className="text-lg">3.02m/s</p>
                        </span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img src="/src/assets/compass-north-32.png" alt="compass.png" />
                            <p className="text-xl col-span-2 col-start-1 row-start-3">Norte</p>
                        </span>
                    </li>
                    <li className="col-start-2 grid">
                        <span>Humedad:</span>
                        <span className="flex gap-x-5 place-content-center items-center">
                            <img className="min-h-fit my-auto" src="/src/assets/wet-32.png" alt="wind.png" />
                            <p className="text-3xl">32%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span>Nivel del mar:</span>
                        <p className="text-3xl flex place-content-center">1015<span className="text-lg content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span>Nivel del suelo:</span>
                        <p className="text-3xl flex place-content-center">621<span className="text-lg content-end">hPa</span></p>
                    </li>
                    <li className="grid gap-5">
                        <span>Nubosidad:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img src="/src/assets/clouds-50.png" alt="wind.png" />
                            <p className="text-3xl grid place-content-center">14%</p>
                        </span>
                    </li>
                    <li className="grid gap-5">
                        <span>Clima:</span>
                        <span className="flex gap-x-2 place-content-center items-center">
                            <img className="col-start-1" src="http://openweathermap.org/img/wn/01n.png" alt="" />
                            <p className="text-xl place-content-center col-start-2">Despejado</p>
                        </span>
                    </li>
                </ul>
            </section>
        </Container>
    )
};

Weather.propTypes = {
    nameClass: PropTypes.string,
}