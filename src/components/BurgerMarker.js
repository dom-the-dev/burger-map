import React, { useState } from 'react'
import PropTypes from 'prop-types'
import BurgerInfo from './BurgerInfo'
import burgerIcon from '../images/burger.svg'
function BurgerMarker({ burger, setCurrentBurgerIndex, currentBurgerIndex, index, name }) {
    return (
        <div onClick={() => setCurrentBurgerIndex(index)}>
            {currentBurgerIndex === index ?
                <BurgerInfo burger={burger} />
                : null
            }
            <img style={icon} src={burgerIcon} alt="burger-marker" />
        </div>
    )
}

const icon = {
    maxWidth: '20px',
}
BurgerMarker.propTypes = {
    name: PropTypes.string
}

export default BurgerMarker

