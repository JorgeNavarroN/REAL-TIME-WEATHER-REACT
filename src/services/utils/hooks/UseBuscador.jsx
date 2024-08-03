import { useEffect, useState } from "react"

export const useBuscador = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [opacity, setOpacity] = useState(0)

  const handleOpen = () => {
    console.log('Abriendo...')
    setIsOpen(!isOpen)
    setIsOpen(!isOpen)
    setTimeout(() => setOpacity(100), )
  }
  
  const handleClose = () => {
    console.log('Cerrando...')
    setOpacity(0)
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 500)
  }

  return {isOpen, opacity, handleOpen, handleClose}
}