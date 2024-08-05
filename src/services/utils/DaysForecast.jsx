import { mean, mode } from 'mathjs'

const arraysEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  return arr1.every((element, index) => element === arr2[index])
}

export const getDaysForecast = ({ listForecast }) => {
  const datesListForecast = listForecast.map(({ dt_txt }) => {
    const date_txt = dt_txt.split(' ').shift()
    const elementsGroup = listForecast.filter(({ dt_txt }) => dt_txt.startsWith(date_txt))
    return elementsGroup
  }).reduce((listUnique, listElement) => {
    if (!listUnique.some((list) => arraysEquals(list, listElement))) listUnique.push(listElement)
    return listUnique
  }, []).map((listDay) => {
    const objDayWeather = listDay.length > 1 ? listDay.reduce(
      (anteriorItem, currentItem) => {
        const id = currentItem?.dt_txt.split(' ')[0]
        const [year, month, day] = id.split('-').map(Number)
        const date = new Date(year, month - 1, day)
        const weekday = new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date)
        anteriorItem.id = id
        anteriorItem.day = weekday
        anteriorItem.temp.push(Math.round(currentItem.main.temp))
        anteriorItem.longitud = listDay.length
        anteriorItem.clima.push(currentItem?.weather[0]?.description)
        anteriorItem.icon.push(currentItem?.weather[0]?.icon)
        return anteriorItem
      }, { temp:[], clima: [], icon: [] }
    ) : listDay.map((item) => {
      const id = item?.dt_txt.split(' ').shift()
      const [year, month, day] = id.split('-').map(Number)
      const date = new Date(year, month - 1, day)
      const weekday = new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date)
      const temp = Math.round(item.main.temp)
      const clima = item.weather[0]?.description
      const icon = item.weather[0]?.icon

      return { id, day: weekday, temp, clima, icon }
    }).shift()

    objDayWeather.temp = objDayWeather.temp instanceof Array ? Math.round(mean(objDayWeather.temp)) : objDayWeather.temp
    objDayWeather.clima = mode(objDayWeather.clima).shift()
    objDayWeather.icon = mode(objDayWeather.icon).shift()

    return objDayWeather
  })

  return datesListForecast  // TODO: RETORNAR LA LISTA DE LOS DIAS PARA EL LINE FORECAST
}