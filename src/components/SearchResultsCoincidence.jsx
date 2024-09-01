import { ItemCoincidence } from "./ItemCoincidence"

export const SearchResultsCoincidence = ({ results, handleClickElement }) => {
  return (
    <div className="text-white bg-gray-800/50 backdrop-blur-sm box-border w-[453px] max-sm:w-[309px]">
      <ul>
        {results?.map((city, index) => {
          return <ItemCoincidence handleClick={handleClickElement} key={city.id + index}
          id={city.id} coord={city.coord} cityName={city.name} country={city.sys.country} icon={city.weather[0].icon} temp={city.main.temp}/>
        })}
      </ul>
    </div>
  )
}