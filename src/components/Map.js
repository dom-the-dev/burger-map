import React, { useState, useEffect } from 'react'
import MapGL, { Marker } from 'react-map-gl';
import BurgerMarker from './BurgerMarker';
import { useSelector } from 'react-redux';
import Controller from './Controller'

const LIGHT_MAP = "mapbox://styles/mapbox/light-v8"
const DARK_MAP = "mapbox://styles/mapbox/dark-v9"

function Map() {
    const burgers = useSelector(state => state.burgers);
    const [currentBurger, setCurrentBurger] = useState(0);
    const [theme, setTheme] = useState(LIGHT_MAP);

    const [viewport, setViewport] = useState({
        latitude: 52.510811,
        longitude: 13.457461,
        zoom: 2,
        bearing: 0,
        pitch: 0
    });

    useEffect(() => {
        if (burgers.length) {
            console.log('burgers', burgers)
            console.log('burgers', burgers[0].lat)

            // const lat = burgers[0].getLat();
            // const long = burgers[0].getLong();

            // if (lat && long) {
            //     setViewport({
            //         ...viewport,
            //         latitude: lat,
            //         longitude: long
            //     })
            // }
        }
    }, [burgers])

    const renderMarker = (burgers) => {
        return burgers.filter(burger => {
            // SKIP IF LAT OR LONG IS NOT SET
            if (!burger.getLat() && !burger.getLong()) {
                return false;
            }
            return true;
        }).map((burger) => {
            return (
                <Marker key={burger.getId()} latitude={burger.getLat()} longitude={burger.getLong()} offsetLeft={-20} offsetTop={-10}>
                    <BurgerMarker name={burger.getName()} />
                </Marker>
            )
        })
    }

    const nextBurger = (nextBurger) => {
        let nextIndex;
        if (nextBurger >= burgers.length) {
            nextIndex = currentBurger - 1;
        } else if (nextIndex <= 0) {
            nextIndex = currentBurger + 1;
        }
        setViewport({
            ...viewport,
            zoom: 10,
            latitude: burgers[nextBurger].getLat(),
            longitude: burgers[nextBurger].getLong()
        })
        setCurrentBurger(nextBurger);
    }

    const toggleTheme = () => {
        if (theme === LIGHT_MAP) {
            setTheme(DARK_MAP)
        } else {
            setTheme(LIGHT_MAP)
        }
    }

    return (
        <>
            <Controller
                toggleTheme={toggleTheme}
                nextBurger={nextBurger}
                currentBurger={currentBurger}
                burgers={burgers}
            />
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle={theme}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                {burgers && burgers.length ? renderMarker(burgers) : null}
            </MapGL>
        </>
    )
}

export default Map

