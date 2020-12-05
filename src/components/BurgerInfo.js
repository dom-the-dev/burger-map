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
            <div style={{ fontWeight: 'bold', marginBottom: 10 }}>{name ? name : 'no name'}</div>
            <div style={{ fontSize: 12 }}>Restaurant: {restaurant ? restaurant : 'no restaurant'} <br />
            Website: {website ?
                    <a style={{ color: 'orange' }} href={`${website}`}>
                        {website}
                    </a>
                    : null
                }
            </div>
            <p style={{ fontSize: 12 }}>{description ? description : 'no description'}</p>
            <p style={{ fontSize: 12 }}>Ingridients: {ingridients ? ingridients : 'no ingridients'}</p>
        </div >
    )
}

const info = {
    boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.5)',
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

