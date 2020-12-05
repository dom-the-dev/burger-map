import React from 'react'
import burger from '../images/burger.svg'

export default function Loading() {

    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const icon = {
        marginBottom: '20px',
        maxWidth: '70px'
    }

    return (
        <div style={style}>
            <img style={icon} src={burger} alt="burger-marker" />
            <div>Loading burgers..</div>
        </div>
    )
}
