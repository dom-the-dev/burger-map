import React, { useState } from 'react'
import PropTypes from 'prop-types'

function BurgerMarker(props) {

    const [showInfo, setShowInfo] = useState(false);

    const info = {
        position: 'absolute',
        background: 'red',
        top: '-50px',
        color: 'white'
    }

    const style = {
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '25px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <div style={info}>{props.name}</div> : null}
            <div style={style}>•</div>
        </div>
    )
}

BurgerMarker.propTypes = {
    name: PropTypes.string
}

export default BurgerMarker

