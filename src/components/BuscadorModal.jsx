import { useAlert } from "../services/utils/hooks/UseAlert"
import { SearchAlert } from "./SearchAlert"
import search from "../assets/search-32.png"
import '../index.css'
import PropTypes from 'prop-types'

export const BuscadorModal = ({ opacity, handleClose, handleSearch }) => {
  const { textAlert, showAlert, alertOpacity, handleHideAlert, handleShowAlert } = useAlert()

  const handleClickInput = (e) => e.stopPropagation()

  const handleOnChangeInput = (e) => {
    if (e.target.value.length > 1) return handleHideAlert()
    handleShowAlert('Debe ingresar el nombre de una ciudad valida')
  }

  const handleSubmitSearch = async (e) => {
    e.preventDefault()
    const formData = new window.FormData(e.target)
    const busqueda = formData.get('busqueda')

    const res = await handleSearch({ busqueda })
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
    <dialog open className={`bg-black/50 absolute opacity-${opacity} top-0 left-0 w-full min-h-screen backdrop-blur-sm transition-opacity`}>
      <span className="text-slate-500 bottom-2 left-3 absolute text-sm">{`Presione 'Esc' para salir`}</span>
      <button onClick={handleClose} className="text-white/50 absolute right-3 text-5xl hover:text-white transition-colors">×</button>
      <main className="my-20 flex flex-col gap-2 h-full">
        <form onSubmit={handleSubmitSearch} className="bg-slate-700 flex flex-row text-white mx-auto box-border drop-shadow-lg backdrop-blur-xl rounded-full transition-colors duration-200">
          <input style={{}} autoFocus={true} name="busqueda" onChange={handleOnChangeInput} onClick={handleClickInput} className="bg-transparent min-h-full px-5 min-w-96 text-lg max-sm:text-sm max-sm:min-w-60 outline-none" type="text" placeholder="Londres, México, Perú ..." />
          <button className="border-l border-white/10 hover:bg-slate-900 rounded-r-full px-5 py-3 transition-colors cursor-pointer">
            <img width={28} height={28} src={search} alt="search-32.png" />
          </button>
        </form>
        <SearchAlert text={textAlert} showAlert={showAlert} alertOpacity={alertOpacity} />
      </main>
    </dialog>
  )
}

BuscadorModal.propTypes = {
  opacity: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  nameClass: PropTypes.string.isRequired,
}