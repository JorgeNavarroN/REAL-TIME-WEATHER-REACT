import { useEffect, useState } from "react"
import { useClima } from "./UseClima"
import { useCoordsCurrentLocation } from "./UseCurrentLocation"
import { useLocalstorage } from "./UseLocalStorage"

export const useBuscador = () => {
  const [saveCityName, handleSaveCityName] = useLocalstorage()
  const coords = useCoordsCurrentLocation()
  const { res, resForecast, query } = useClima({ cityName: saveCityName})
  const [isOpen, setIsOpen] = useState(true)
  const [opacity, setOpacity] = useState(0)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    setTimeout(() => setOpacity(100))
  }

  const handleClose = () => {
    setOpacity(0)
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 300)
  }

  const handleBuscar = async ({ busqueda }) => {
    if (busqueda === '') {
      return { err: 'isEmpty' }
    }
    const res = await query({city: busqueda})
    if (res.status === 404 || res.status === 500) {
      return { err: res.status }
    }
    handleClose()
    handleSaveCityName({ cityName: busqueda })
    return { err: res.status }
  }

  const handleBuscarUbicacionActual = async () => {
    if (!coords) return
    const res = await query({lat: coords.lat, lon: coords.lon})
    if (res.status === 404 || res.status === 500) {
      return { err: res.status }
    }
    handleSaveCityName({ cityName: res.city })
    return { err: res.status }
  }

  const validateKey = (event) => {
    const tecla = event.key
    if (tecla === "Escape") handleClose()
  }

  useEffect(() => {
    if (isOpen) return
    addEventListener('keyup', validateKey)
    return () => {
      removeEventListener('keyup', validateKey)
    }
  }, [isOpen])

  return { res, resForecast, isOpen, opacity, handleBuscar, handleBuscarUbicacionActual, handleOpen, handleClose }
}