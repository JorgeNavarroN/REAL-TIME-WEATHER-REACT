import { useAlert } from "../services/utils/hooks/UseAlert"
import { SearchAlert } from "./SearchAlert"
import search from "../assets/search-32.png"
import loading_moon from '../assets/gif/loading_moon.gif'
import loading_sun from '../assets/gif/loading-sun.gif'
import '../index.css'
import PropTypes from 'prop-types'
import { SearchResultsCoincidence } from "./SearchResultsCoincidence"
import { useCallback, useEffect, useState } from "react"
import debounce from "just-debounce-it"

const loadingArray = [loading_moon, loading_sun];

const getRandomGifLoading = () => {
  return loadingArray[Math.floor(Math.random() * loadingArray.length)]
}

export const BuscadorModal = ({ opacity, handleClose, handleSearch }) => {
  const { textAlert, showAlert, alertOpacity, handleHideAlert, handleShowAlert } = useAlert()

  const [existCoincidence, setExistCoincidence] = useState(false)
  const [responseCoincidence, setResponseCoincidence] = useState({})
  
  const [gifLoading, setGifLoading] = useState(getRandomGifLoading());

  const [isLoading, setIsLoading] = useState(false)
  const debouncedHandleSearch = useCallback(debounce(search => {
    getResultsCoincidence({ search })
  }, 100), [])

  const handleClickElement = useCallback(async (coords) => {
    setGifLoading(getRandomGifLoading())
    setIsLoading(true)
    await handleSearch({ coord: coords })
    setIsLoading(false)
  }, [handleSearch])

  const getResultsCoincidence = useCallback(({ search }) => {
    if (search.length > 2) {
      fetch(`/api/data/2.5/find?q=${search}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        .then(response => response.json())
        .then(json => {
          setResponseCoincidence(json)
          console.log('Json: ', json);
        })
    }
  }, [])

  const handleClickInput = (e) => e.stopPropagation()

  const handleOnChangeInput = (e) => {
    const busqueda = e.target.value
    if (busqueda.length > 2) {
      setExistCoincidence(true);
      debouncedHandleSearch(busqueda)
      handleHideAlert()
      return
    }
    setExistCoincidence(false);
    handleShowAlert('Debe ingresar el nombre de una ciudad valida')
  }

  const handleSubmitSearch = async (e) => {
    e.preventDefault()
    setGifLoading(getRandomGifLoading())
    setIsLoading(true)
    const formData = new window.FormData(e.target)
    const busqueda = formData.get('busqueda')

    const res = await handleSearch({ busqueda })
    setIsLoading(false)
    if (res.err === 404) {
      handleShowAlert('Ciudad no encontrada, ingrese nuevamente')
      return
    }
    if (res.err === 500) {
      handleShowAlert('Lo sentimos, ha ocurrido un error en el servidor. Por favor, intentalo de nuevo más tarde')
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
    <dialog open className={`bg-black/50 fixed opacity-${opacity} top-0 left-0 w-full min-h-screen backdrop-blur-sm transition-opacity`}>
      <span className="text-slate-500 bottom-2 left-3 absolute text-sm">{`Presione 'Esc' para salir`}</span>
      {
        isLoading && 
        <span className="text-slate-500 bottom-5 right-6 absolute text-xl">
          <img src={gifLoading} width={80} height={80} alt="loading.gif" />
        </span>}      
      <button onClick={handleClose} className="text-white/50 absolute right-3 text-5xl hover:text-white transition-colors">×</button>
      <main className="my-20 flex flex-col items-center h-full">
        <form onSubmit={handleSubmitSearch} className="flex flex-col shadow-lg shadow-black/60 rounded-[1.5rem] overflow-hidden">
          <SearchAlert text={textAlert} showAlert={showAlert} alertOpacity={alertOpacity} />
          <div className="bg-slate-700 flex flex-row text-white mx-auto box-border drop-shadow-lg backdrop-blur-xl transition-colors duration-200">
            <input autoFocus={true} name="busqueda" onChange={handleOnChangeInput} onClick={handleClickInput} className="bg-transparent min-h-full px-5 min-w-96 text-lg max-sm:text-sm max-sm:min-w-60 outline-none" type="text" placeholder="Londres, México, Perú ..." />
            <button className="border-l border-white/10 hover:bg-slate-900 px-5 py-3 transition-colors cursor-pointer">
              <img width={28} height={28} src={search} alt="search-32.png" />
            </button>
          </div>

          {/* Componente de las coincidencias de busqueda.*/}
          {existCoincidence && <SearchResultsCoincidence results={responseCoincidence.list} handleClickElement={handleClickElement} />}
        </form>
      </main>
    </dialog>
  )
}

BuscadorModal.propTypes = {
  opacity: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
}