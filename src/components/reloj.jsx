import PropTypes from 'prop-types'
import { useCurrentDateTime } from '../services/utils/hooks/UseCurrentDateTime'
import { getDateByTimezone } from '../services/utils/DateByTimezone'

export const Reloj = ({ timezone = 3600 }) => {
    const { dateTime } = useCurrentDateTime({})
    const { dateTimeOfLocate } = getDateByTimezone(dateTime, timezone)
    const optionsTime = { timeZone: 'UTC', hour: 'numeric', minute: 'numeric' }
    const optionsDate = { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <section className='flex flex-col items-center gap-5 px-10'>
            <p className='text-white text-8xl max-sm:text-6xl'>{dateTimeOfLocate.toLocaleTimeString(undefined, optionsTime)}</p>
            <p className='text-white text-4xl max-sm:text-lg'>{dateTimeOfLocate.toLocaleDateString(undefined, optionsDate)}</p>
        </section>
    )
}

Reloj.propTypes = {
    timezone: PropTypes.number
}