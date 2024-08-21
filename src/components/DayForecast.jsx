import PropTypes from 'prop-types'

export const DayForecast = ({ day, temp, clima, icon }) => {
  return (
    <li className="grid gap-y-2 place-items-center items-center">
      <h3 className="text-2xl max-sm:text-xl">{day}</h3>
      <span className="flex flex-row items-center">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="l-icon.png" />
        <p className="text-2xl max-sm:text-xl">{temp}°C</p>
      </span>
      <p className="text-2xl max-sm:text-xl text-center flex justify-center algi row-start-3 min-w-40">{clima}</p>
    </li>
  )
}

DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  clima: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}