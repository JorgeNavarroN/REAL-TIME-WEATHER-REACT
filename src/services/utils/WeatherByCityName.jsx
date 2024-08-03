export const getWeatherByCityName = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
  const json = await res.json()
  return {
    status: res.status,
    temp: json?.main?.temp,
    feels_like: json?.main?.feels_like,
    temp_min: json?.main?.temp_min,
    temp_max: json?.main?.temp_max,
    wind: json?.wind,
    humidity: json?.main?.humidity,
    sea_level: json?.main?.sea_level,
    grnd_level: json?.main?.grnd_level,
    clouds: json?.clouds?.all,
    weather: json?.weather?.shift(),
    timezone: json?.timezone,
    ubic: json?.name + ' - ' + json?.sys?.country
  }
}