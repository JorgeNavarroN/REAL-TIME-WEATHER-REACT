import PropTypes from 'prop-types'

export const Container = ({ children, nameClass, expandir }) => {
    const expandClass = expandir ? 'w-full h-full' : '';
    return (
        <article className={`text-white ${nameClass} bg-black/50 backdrop-blur-sm rounded-xl flex flex-row max-sm:flex-col overflow-hidden ${expandClass} hover:bg-cyan-950 transition-colors`}>
            {children}
        </article>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    nameClass: PropTypes.string,
    expandir: PropTypes.bool,
}