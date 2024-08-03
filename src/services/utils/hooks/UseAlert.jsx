import { useState } from "react"

export const useAlert = () => {
  const [alertOpacity, setAlertOpacity] = useState(0)
  const [showAlert, setShowAlert] = useState(true)
  const [textAlert, setTextAlert] = useState('')

  const handleShowAlert = (text = 'Alert') => {
    setTextAlert(text)
    setShowAlert(false)
    setTimeout(() => setAlertOpacity(100), 100)
  }

  const handleHideAlert = () => {
    setAlertOpacity(0)
    setTimeout(() => setShowAlert(true), 100)
  }

  return { textAlert, alertOpacity, showAlert, handleShowAlert, handleHideAlert }
}