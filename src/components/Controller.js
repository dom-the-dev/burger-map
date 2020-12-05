import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import BurgerInfo from './BurgerInfo';

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
        <div style={wrapper}>
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

            <BurgerInfo burger={burgers[currentBurgerIndex]} />
        </div>
    )
}

const wrapper = {
    maxWidth: 400,
    position: 'absolute',
    zIndex: 2,
    top: 10,
    left: 10
}

const style = {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 3,
    padding: '10px',
    top: 20,
    left: 20,
    marginBottom: 10,
    boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.5)'
}

const menuBar = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}


const arrowIcons = {
    color: 'white',
    fontSize: 14,
    cursor: 'pointer',
    margin: '0 10px'
}

const selectBox = {
    padding: '3px',
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14
}

Controller.propTypes = {
    nextBurger: PropTypes.func.isRequired
}

export default Controller

