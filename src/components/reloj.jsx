import PropTypes from 'prop-types'

export const Reloj = ({ fechaHoraActual }) => {
    const optionsTime = { hour: 'numeric', minute: 'numeric' };
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const hora = fechaHoraActual.getHours();
    // const minutos = fechaHoraActual.getMinutes();
    return (
        <section className='flex flex-col items-center gap-5 px-10'>
            <p className='text-white text-7xl'>{fechaHoraActual.toLocaleTimeString(undefined, optionsTime)}</p>
            <p className='text-white text-3xl'>{fechaHoraActual.toLocaleDateString(undefined, options)}</p>
        </section>
    )
}

Reloj.propTypes = {
    fechaHoraActual: PropTypes.instanceOf(Date).isRequired,
}