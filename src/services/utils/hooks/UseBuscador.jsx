import { useEffect, useRef, useState } from "react"
import { useClima } from "./UseClima"

export const useBuscador = () => {
  const { res, resForecast, query } = useClima()
  const [isOpen, setIsOpen] = useState(true)
  const [opacity, setOpacity] = useState(0)

  const inputRef = useRef(null)

  const handleOpen = () => {
    console.log('Abriendo...')
    setIsOpen(!isOpen)
    setIsOpen(!isOpen)
    setTimeout(() => setOpacity(100),)
  }

  const handleClose = () => {
    console.log('Cerrando...')
    setOpacity(0)
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 500)
  }

  const handleBuscar = async () => {
    if (!inputRef.current) return
    if (inputRef.current.value === '') {
      console.log('Debe ingresar el nombre de una ciudad valida')
      return { err: 'isEmpty' }
    }
    const res = await query(inputRef.current.value)
    if (res === 404 || res === 500) {
      console.log('Mi res UseBuscador: ', res)
      return { err: res }
    }
    inputRef.current.value = ''
    handleClose()
    return { err: res }
  }

  return { res, resForecast, isOpen, inputRef, opacity, handleBuscar, handleOpen, handleClose }
}