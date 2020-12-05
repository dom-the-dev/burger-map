import React from 'react'
import PropTypes from 'prop-types'

function Controller({ nextBurger, currentBurger, burgers, toggleTheme }) {

    const renderBurgers = (burgers) => {
        return burgers.map(burger => {
            return <option value={burger.getName()}>{burger.getName()}</option>
        })
    }

    return (
        <div style={style}>
            <select name="burgers" id="select-burgers">
                {renderBurgers(burgers)}
            </select> <br />

            <button onClick={toggleTheme}>Toggle Light/Dark Theme</button>
            <button onClick={() => nextBurger(currentBurger - 1)}>Prev Burger</button>
            <button onClick={() => nextBurger(currentBurger + 1)}>Next Burger</button>
        </div>
    )
}

const style = {
    position: 'absolute',
    backgroundColor: 'red',
    padding: 20,
    width: 200,
    zIndex: 2
}

Controller.propTypes = {
    nextBurger: PropTypes.func.isRequired
}

export default Controller

