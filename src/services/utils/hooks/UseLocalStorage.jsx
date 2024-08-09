import { useState } from "react"

export function useLocalstorage () {
  const [saveCityName, setSaveCityName] = useState(() => {
    const savedCity = localStorage.getItem('cityName')
    return savedCity ? JSON.parse(savedCity).city : 'London'
  })

  const handleSaveCityName = ({ cityName }) => {
    localStorage.setItem('cityName', JSON.stringify({ city: cityName }))
    setSaveCityName(cityName)
  }

  return [saveCityName, handleSaveCityName]
}