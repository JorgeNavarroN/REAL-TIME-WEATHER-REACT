import { useCallback, useEffect, useState } from "react"
import { useClima } from "./UseClima"
import { useCoordsCurrentLocation } from "./UseCurrentLocation"
import { useLocalstorage } from "./UseLocalStorage"

export const useBuscador = () => {
  const [savedCoords, handleSaveCityName] = useLocalstorage()
  const coords = useCoordsCurrentLocation()
  const { res, resForecast, query } = useClima({ coords: savedCoords})
  const [isOpen, setIsOpen] = useState(true)
  const [opacity, setOpacity] = useState(0)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    setTimeout(() => setOpacity(100))
  }

  const handleClose = useCallback(() => {
    setOpacity(0)
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 300)
  }, [isOpen])

  const handleBuscar = useCallback(async ({ busqueda, coord }) => {
    if (busqueda === '') {
      return { err: 'isEmpty' }
    }
    const res = busqueda ? await query({ cityName: busqueda }) : await query({ lat: coord.lat, lon: coord.lon })
    if (res.status === 404 || res.status === 500) {
      return { err: res.status }
    }
    handleClose()
    handleSaveCityName({ cityName: res.city, coords: res.coord })
    return { err: res.status }
  }, [handleClose, handleSaveCityName, query]);

  const handleBuscarUbicacionActual = useCallback(async () => {
    if (!coords) return
    const res = await query({lat: coords.lat, lon: coords.lon})
    if (res.status === 404 || res.status === 500) {
      return { err: res.status }
    }
    handleSaveCityName({ cityName: res.city, coords: res.coord  })
    return { err: res.status }
  }, [coords, handleSaveCityName, query])

  const validateKey = useCallback((event) => {
    const tecla = event.key
    if (tecla === "Escape") handleClose()
  }, [handleClose])

  useEffect(() => {
    if (isOpen) return
    addEventListener('keyup', validateKey)
    return () => {
      removeEventListener('keyup', validateKey)
    }
  }, [isOpen, validateKey])

  return { res, resForecast, isOpen, opacity, handleBuscar, handleBuscarUbicacionActual, handleOpen, handleClose }
}