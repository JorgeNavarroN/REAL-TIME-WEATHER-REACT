export const ItemCoincidence = ({ coord, cityName = 'City', country = 'PE', temp = '12', icon = '01d', handleClick }) => {
  return (
    <li onClick={() => handleClick(coord)} className="grid grid-cols-[1fr_auto] max-sm:grid-cols-[190px_auto] place-content-between p-5 items-center cursor-pointer hover:bg-cyan-950/50">
      <div className="flex flex-col">
        <label href="#" className="text-lg flex flex-row gap-3 truncate overflow-hidden cursor-pointer max-sm:text-sm">
          <img className="w-8 h-8 max-sm:w-5 max-sm:h-5" src={`https://flagsapi.com/${country}/flat/64.png`} alt="country.png" />
          {`${cityName} - ${country}`}
        </label>
        <p className="text-sm text-gray-500 max-sm:text-xs">{coord.lat}, {coord.lon}</p>
      </div>
      <div className="flex flex-row items-center col-start-2 justify-end">
        <img className="max-sm:w-8" src={`https://openweathermap.org/img/wn/${icon}.png`} alt="icon.png" />
        <p className="text-xl max-sm:text-sm">{temp}°C</p>
      </div>
    </li>
  )
}