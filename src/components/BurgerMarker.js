import React from 'react'
import PropTypes from 'prop-types'
import burgerIcon from '../images/burger.svg'
function BurgerMarker({ currentBurgerIndex, setCurrentBurgerIndex, index }) {
    return (
        <div onClick={() => setCurrentBurgerIndex(index)}>
            <img style={currentBurgerIndex === index ? { ...icon, backgroundColor: 'orange', borderRadius: 5, padding: 5 } : icon} src={burgerIcon} alt="burger-marker" />
        </div>
    )
}

const icon = {
    maxWidth: '35px',
}
BurgerMarker.propTypes = {
    name: PropTypes.string
}

export default BurgerMarker

