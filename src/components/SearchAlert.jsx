import PropTypes from 'prop-types'

export const SearchAlert = ({ text, showAlert, alertOpacity }) => {
  return (
    <div hidden={showAlert} className={`opacity-${alertOpacity} transition-all duration-200`}>
      <span className="flex flex-row gap-2 justify-center">
        <img src="/src/assets/alert-24.png" alt="" />
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