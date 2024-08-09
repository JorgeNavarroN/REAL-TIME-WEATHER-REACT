import { Container } from "./Container";
import PropTypes from 'prop-types'
import { DayForecast } from "./DayForecast";
import { capitalizarTexto } from "../services/utils/CapitalizarTexto";

const listDayForecast = [
    {
        id: 0,
        day: 'Lunes',
        temp: 19,
        clima: 'Despejado',
        icon: '01n'
    },
    {
        id: 1,
        day: 'Martes',
        temp: 32,
        clima: 'Muy nuboso',
        icon: '02n'
    },
    {
        id: 2,
        day: 'Miercoles',
        temp: 12,
        clima: 'Nublado',
        icon: '02d'
    },
    {
        id: 3,
        day: 'Jueves',
        temp: 32,
        clima: 'Soleado',
        icon: '01d'
    },
    {
        id: 4,
        day: 'Viernes',
        temp: 24,
        clima: 'Muy nuboso',
        icon: '03d'
    },
    {
        id: 5,
        day: 'Sabado',
        temp: 24,
        clima: 'Muy nuboso',
        icon: '03d'
    }
]

export const LineForecast = ({ nameClass, daysForecast }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="px-5 rounded-lg place-content-center">
                <ul className="text-md flex gap-x-10 gap-y-5 place-content-between">
                    {daysForecast?.days?.map(({ id, day, temp, clima, icon}) => {
                        return <DayForecast key={id} day={capitalizarTexto(day)} temp={temp} clima={capitalizarTexto(clima)} icon={icon} />
                    })}
                </ul>
            </section>
        </Container>
    );
}

LineForecast.propTypes = {
    nameClass: PropTypes.string,
    daysForecast: PropTypes.object.isRequired
}