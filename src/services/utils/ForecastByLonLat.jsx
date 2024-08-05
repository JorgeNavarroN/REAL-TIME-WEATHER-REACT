import { getDaysForecast } from "./DaysForecast"

export const getForecastByLonLat = async ({ lat, lon }) => {
  const res = await fetch(`/api/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
  const json = await res.json()
  const daysFormated = getDaysForecast({ listForecast: json?.list })
  return {
    status: res.status,
    coord: json?.city?.coord,
    days: daysFormated,
  }
  // fetch(`/api/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
}