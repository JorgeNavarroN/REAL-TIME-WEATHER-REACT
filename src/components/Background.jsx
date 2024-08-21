import { useBackground } from '../services/utils/hooks/UseBackground'
import PropTypes from 'prop-types'

export const Background = ({ nameClass, children, dateTime, timezone }) => {
  const { background, opacity } = useBackground({ dateTime, timezone })
  return (
    <div className={`${background} ${nameClass}`}>
      <main className={`text-white bg-slate-950 bg-opacity-${opacity} min-h-screen transition-all duration-500 grid items-start gap-5 p-5`}>
        {children}
      </main>
    </div>
  )
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  timezone: PropTypes.number,
  nameClass: PropTypes.string,
}