import React from 'react'
import PropTypes from 'prop-types'
import burgerIcon from '../images/burger.svg'
function BurgerMarker() {
    return (
        <img style={icon} src={burgerIcon} alt="burger-marker" />
    )
}

const icon = {
    maxWidth: '20px',
}
BurgerMarker.propTypes = {
    name: PropTypes.string
}

export default BurgerMarker

