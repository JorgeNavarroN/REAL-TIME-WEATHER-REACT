import PropTypes from 'prop-types'
import alert24 from "../assets/alert-24.png"

export const SearchAlert = ({ text, showAlert, alertOpacity }) => {
  return (
    <div hidden={showAlert} className={`opacity-${alertOpacity} transition-all duration-200 absolute top-10 right-0 left-0`}>
      <span className="flex flex-row gap-2 justify-center items-center">
        <img className='max-sm:w-4 max-sm:h-4' src={alert24} alt="alert-24.png" />
        <span className="text-red-600 max-sm:text-xs">{text}</span>
      </span>
    </div>
  )
}

SearchAlert.propTypes = {
  text: PropTypes.string.isRequired,
  showAlert: PropTypes.bool.isRequired,
  alertOpacity: PropTypes.number.isRequired,
}