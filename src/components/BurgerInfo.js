import React from 'react'
import PropTypes from 'prop-types'

function BurgerInfo({ burger }) {
    const name = burger.getName();
    const website = burger.getWeb();
    const description = burger.getDescription();
    const restaurant = burger.getRestaurant();
    const ingridients = burger.getIngredientsString();
    return (
        <div style={info}>
            {name ? name : null} <br />
            {restaurant ? restaurant : null} <br />
            {website ?
                <a href={`https://${website}`}>
                    {website}
                </a>
                : null
            } <br />
            <p>{description ? description : null}</p>
            <p>Ingridients: {ingridients ? ingridients : null}</p>
        </div>
    )
}

const info = {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.7)',
    top: 0,
    right: '30px',
    color: 'white'
}

BurgerInfo.propTypes = {

}

export default BurgerInfo

