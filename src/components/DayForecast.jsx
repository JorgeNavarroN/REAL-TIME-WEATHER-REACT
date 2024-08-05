export const DayForecast = ({ day, temp, clima, icon }) => {
  return (
    <li className="grid gap-y-2 place-items-center items-center">
      <span className="text-2xl">{day}</span>
      <span className="flex flex-row items-center">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="l-icon.png" />
        <p className="text-2xl">{temp}°C</p>
      </span>
      <p className="text-2xl place-content-center row-start-3">{clima}</p>
    </li>
  )
}