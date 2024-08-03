import { useRef } from "react"
import { useAlert } from "../services/utils/hooks/UseAlert"
import { SearchAlert } from "./SearchAlert"

export const BuscadorModal = ({ opacity, inputRef, isOpen, handleClose, handleSearchLocation }) => {
  const { textAlert, showAlert, alertOpacity, handleHideAlert, handleShowAlert } = useAlert()
  
  const handleClickInput = (e) => e.stopPropagation()

  const handleOnChangeInput = (e) => {
    if (e.target.value.length > 1) return handleHideAlert()
    handleShowAlert('Debe ingresar el nombre de una ciudad valida')
  }

  const handleClickSearch = async (e) => {
    e.stopPropagation() 
    const res = await handleSearchLocation()
    if (res.err === 404) {
      handleShowAlert('Ciudad no encontrada, ingrese nuevamente')
      return
    }
    if (res.err === 'isEmpty') {
      handleShowAlert('Rellene el campo para buscar')
      return
    }
    if (res.err === 'isTooShort') {
      handleShowAlert('')
      return
    }
  }

  return (
    <div hidden={isOpen} onClick={handleClose} className={`bg-black/50 absolute opacity-${opacity} top-0 left-0 w-full min-h-screen backdrop-blur-sm transition-opacity duration-300`}>
      <dialog open className="bg-transparent">
        <main className="my-20 flex flex-col gap-2 h-full">
          <div className="bg-slate-700 flex flex-row gap-5 text-white mx-auto box-border drop-shadow-lg backdrop-blur-xl hover:bg-slate-800 focus:bg-slate-800 rounded-full px-5 py-3 text-lg transition-colors duration-200">
            <input onChange={handleOnChangeInput} ref={inputRef} onClick={handleClickInput} className="bg-transparent min-h-full min-w-96 outline-none" type="text" placeholder="Buscar: ejemplo - Londres, México, Perú" />
            <img onClick={handleClickSearch} className="cursor-pointer" src="/src/assets/search-32.png" alt="" />
          </div>
          <SearchAlert text={textAlert} showAlert={showAlert} alertOpacity={alertOpacity} />
        </main>
      </dialog>
    </div>
  )
}