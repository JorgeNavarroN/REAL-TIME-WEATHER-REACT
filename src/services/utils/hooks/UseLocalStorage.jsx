import { useState } from "react"

export function useLocalstorage () {
  const [savedCoords, setSaveCoords] = useState(() => {
    const saved = localStorage.getItem('waveweatherstorage')
    return saved ? JSON.parse(saved).coords : { lat: 51.50853, lon: -0.125740 }
  })

  const handleSaveCityName = ({ cityName, coords }) => {
    localStorage.setItem('waveweatherstorage', JSON.stringify({ city: cityName, coords }))
    setSaveCoords(coords)
  }

  return [savedCoords, handleSaveCityName]
}