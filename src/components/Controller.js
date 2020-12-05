import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Controller({ nextBurger, currentBurgerIndex, burgers, setDarkTheme, darkTheme }) {

    const renderBurgers = (burgers) => {
        return burgers.map((burger, index) => {
            return (
                <option selected={index === currentBurgerIndex ? true : false} key={burger.getId()} value={index}>
                    {burger.getName()}
                </option>
            )
        })
    }

    return (
        <div style={style}>

            <div style={menuBar}>
                <span style={arrowIcons} onClick={() => nextBurger(currentBurgerIndex - 1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>

                <select style={selectBox} defaultValue={currentBurgerIndex ? currentBurgerIndex : -1} onChange={(e) => nextBurger(parseInt(e.target.value))} name="burgers" id="select-burgers">
                    {renderBurgers(burgers)}
                </select>

                <span style={arrowIcons} onClick={() => nextBurger(currentBurgerIndex + 1)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </div>
    )
}

const style = {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 3,
    padding: '20px 10px',
    zIndex: 2,
    top: 20,
    left: 20,
    boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.5)'
}

const menuBar = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


const arrowIcons = {
    color: 'white',
    fontSize: 24,
    cursor: 'pointer',
    margin: '0 10px'
}

const selectBox = {
    padding: '3px',
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
}

Controller.propTypes = {
    nextBurger: PropTypes.func.isRequired
}

export default Controller

