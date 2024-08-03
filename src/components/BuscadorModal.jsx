import { useRef, useState } from "react"

export const BuscadorModal = ({ opacity, isOpen, handleClose, handleSearchLocation }) => {
  const inputRef = useRef(null)
  const [alertOpacity, setAlertOpacity] = useState(0)
  const [showAlert, setShowAlert] = useState(true)

  const handleClickInput = (e) => e.stopPropagation()

  const handleOnChangeInput = (e) => {
    if (e.target.value.length > 2) return handleHideAlert()
    handleShowAlert()
  }

  const handleShowAlert = () => {
    setShowAlert(false)
    setTimeout(() => setAlertOpacity(100), 100)
  }

  const handleHideAlert = () => {
    setAlertOpacity(0)
    setTimeout(() => setShowAlert(true), 100)
  }

  const handleBusqueda = (e) => {
    e.stopPropagation()
    if (!inputRef.current) return
    if (inputRef.current.value === '') {
      handleShowAlert()
      console.log('Debe ingresar el nombre de una ciudad valida')
      return
    }
    handleSearchLocation(inputRef)
    inputRef.current.value = ''
    handleClose()
  }

  return (
    <div hidden={isOpen} onClick={handleClose} className={`bg-black/50 absolute opacity-${opacity} top-0 left-0 w-full min-h-screen backdrop-blur-sm transition-opacity duration-300`}>
      <dialog open className="bg-transparent">
        <main className="my-20 flex flex-col gap-2 h-full">
          <div className="bg-slate-700 flex flex-row gap-5 text-white mx-auto box-border drop-shadow-lg backdrop-blur-xl hover:bg-slate-800 focus:bg-slate-800 rounded-full px-5 py-3 text-lg transition-colors duration-200">
            <input onChange={handleOnChangeInput} ref={inputRef} onClick={handleClickInput} className="bg-transparent min-h-full min-w-96 outline-none" type="text" placeholder="Buscar: ejemplo - Londres, México, Perú" />
            <img onClick={handleBusqueda} className="cursor-pointer" src="/src/assets/search-32.png" alt="" />
          </div>
          <div hidden={showAlert} className={`opacity-${alertOpacity} transition-all duration-200`}>
            <span className="flex flex-row gap-2 justify-center">
              <img src="/src/assets/alert-24.png" alt="" />
              <span className="text-red-600">Debe ingresar el nombre de una ciudad valida</span>
            </span>
          </div>
        </main>
      </dialog>
    </div>
  )
}