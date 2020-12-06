import React, { useState, useRef } from 'react'
import MapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

import Burger from '../repository/Burger';
import BurgerMarker from './BurgerMarker';
import Controller from './Controller'

const STREETS_MAP = "mapbox://sprites/mapbox/streets-v8"

function Map() {
    const burgers = useSelector(state => state.burgers);
    const mapRef = useRef(null);

    const [viewport, setViewport] = useState({});
    const [currentBurgerIndex, setCurrentBurgerIndex] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);

    const renderMarker = (burgers) => {
        return burgers.filter(burger => {
            // SKIP IF LAT OR LONG IS NOT SET
            if (!burger.getLat() && !burger.getLong()) {
                return false;
            }
            return true;
        }).map((burger, index) => {
            return (
                <Marker key={burger.getId()} latitude={burger.getLat()} longitude={burger.getLong()} offsetLeft={-20} offsetTop={-10}>
                    <BurgerMarker
                        index={index}
                        currentBurgerIndex={currentBurgerIndex}
                        setCurrentBurgerIndex={setCurrentBurgerIndex}
                        burger={burger}
                    />
                </Marker>
            )
        })
    }

    const nextBurger = (nextBurger) => {
        let nextIndex = nextBurger;

        if (nextBurger > burgers.length - 1) {
            nextIndex = 0;
        }

        if (nextBurger === -1) {
            nextIndex = burgers.length - 1;
        }

        setViewport({
            ...viewport,
            zoom: 10,
            latitude: burgers[nextIndex].getLat(),
            longitude: burgers[nextIndex].getLong()
        })
        setCurrentBurgerIndex(nextIndex);
    }

    return (
        <>
            <Controller
                setDarkTheme={setDarkTheme}
                darkTheme={darkTheme}
                nextBurger={nextBurger}
                currentBurgerIndex={currentBurgerIndex}
                burgers={burgers}
            />
            <MapGL
                {...viewport}
                ref={mapRef}
                width="100vw"
                height="100vh"
                mapStyle={STREETS_MAP}
                // transitionDuration={2000}
                // transitionInterpolator={new FlyToInterpolator({ curve: 3, speed: 100 })}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                {burgers && burgers.length ?
                    renderMarker(burgers)
                    : null
                }
            </MapGL>
        </>
    )
}

Map.propTypes = {
    burgers: PropTypes.arrayOf(PropTypes.instanceOf(Burger)).isRequired
}

export default Map

