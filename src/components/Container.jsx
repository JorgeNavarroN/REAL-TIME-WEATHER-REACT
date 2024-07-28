import PropTypes from 'prop-types'

export const Container = ({ children, nameClass, expandir }) => {
    const expandClass = expandir ? 'w-full h-full' : '';
    return (
        <article className={`text-white ${nameClass} ${expandClass} bg-black/50 backdrop-blur-sm rounded-xl grid overflow-hidden ${expandClass}`}>
            {children}
        </article>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    nameClass: PropTypes.string,
    expandir: PropTypes.bool,
}