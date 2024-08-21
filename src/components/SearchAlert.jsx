import PropTypes from 'prop-types'
import alert24 from "../assets/alert-24.png"

export const SearchAlert = ({ text, showAlert, alertOpacity }) => {
  return (
    <div hidden={showAlert} className={`opacity-${alertOpacity} transition-all duration-200`}>
      <span className="flex flex-row gap-2 justify-center">
        <img src={alert24} alt="" />
        <span className="text-red-600">{text}</span>
      </span>
    </div>
  )
}

SearchAlert.propTypes = {
  text: PropTypes.string.isRequired,
  showAlert: PropTypes.bool.isRequired,
  alertOpacity: PropTypes.number.isRequired,
}