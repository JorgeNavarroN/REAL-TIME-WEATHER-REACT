import { Container } from "./Container";
import PropTypes from 'prop-types'
import { DayForecast } from "./DayForecast";
import { capitalizarTexto } from "../services/utils/CapitalizarTexto";

export const LineForecast = ({ nameClass, daysForecast }) => {
    return (
        <Container nameClass={nameClass} expandir>
            <section className="px-5 max-sm:px-0 rounded-lg place-content-center overflow-x-auto">
                <ul className="text-md flex max-sm:flex-col gap-x-10 max-sm:gap-x-0 max-sm:gap-y-16 gap-y-5 place-content-between">
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