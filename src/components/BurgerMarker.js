import React, { useState } from 'react'
import PropTypes from 'prop-types'
import burger from '../images/burger.svg'

function BurgerMarker(props) {

    const [showInfo, setShowInfo] = useState(false);

    const info = {
        position: 'absolute',
        background: 'red',
        top: '-50px',
        color: 'white'
    }

    const icon = {
        maxWidth: '20px',
    }

    return (
        <div onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <div style={info}>{props.name}</div> : null}
            <img style={icon} src={burger} alt="burger-marker" />
        </div>
    )
}

BurgerMarker.propTypes = {
    name: PropTypes.string
}

export default BurgerMarker

