import { Container } from "./Container";
import PropTypes from 'prop-types'


export const LineForecast = ({ nameClass }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="px-10 py-5 rounded-lg place-content-center">
                <ul className="text-md flex gap-x-10 gap-y-5 place-content-between">
                    <li className="grid gap-y-2 place-items-center">
                        <span className="col-span-3 text-2xl">Lunes</span>
                        <img className="col-start-1" src="http://openweathermap.org/img/wn/01n.png" alt="l-icon.png"/>
                        <p className="text-2xl">18°C</p>
                        <p className="text-2xl place-content-center row-start-3 col-span-3">Despejado</p>
                    </li>
                    <li className="grid gap-y-2 place-items-center">
                        <span className="col-span-3 text-2xl">Martes</span>
                        <img className="col-start-1" src="http://openweathermap.org/img/wn/03d.png" alt="l-icon.png"/>
                        <p className="text-2xl">18°C</p>
                        <p className="text-2xl place-content-center row-start-3 col-span-3">Despejado</p>
                    </li>
                    <li className="grid gap-y-2 place-items-center">
                        <span className="col-span-3 text-2xl">Miercoles</span>
                        <img className="col-start-1" src="http://openweathermap.org/img/wn/04d.png" alt="l-icon.png"/>
                        <p className="text-2xl">18°C</p>
                        <p className="text-2xl place-content-center row-start-3 col-span-3">Despejado</p>
                    </li>
                    <li className="grid gap-y-2 place-items-center">
                        <span className="col-span-3 text-2xl">Jueves</span>
                        <img className="col-start-1" src="http://openweathermap.org/img/wn/01d.png" alt="l-icon.png"/>
                        <p className="text-2xl">18°C</p>
                        <p className="text-2xl place-content-center row-start-3 col-span-3">Despejado</p>
                    </li>
                    <li className="grid gap-y-2 place-items-center">
                        <span className="col-span-3 text-2xl">Viernes</span>
                        <img className="col-start-1" src="http://openweathermap.org/img/wn/02d.png" alt="l-icon.png"/>
                        <p className="text-2xl">18°C</p>
                        <p className="text-2xl place-content-center row-start-3 col-span-3">Despejado</p>
                    </li>
                </ul>
            </section>
        </Container>
    );
}

LineForecast.propTypes = {
    nameClass: PropTypes.string,
}