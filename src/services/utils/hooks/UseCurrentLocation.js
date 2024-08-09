import { useEffect, useRef } from "react"

export function useCoordsCurrentLocation() {
  const coords = useRef({ lat: 0, lon: 0 })

  const handleSucces = (position) => {
    coords.current = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSucces)
  }, [])
  return coords.current
}