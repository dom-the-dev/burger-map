import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import MapGL, { Marker } from 'react-map-gl';
import BurgerMarker from './BurgerMarker';
import { useSelector } from 'react-redux';


function Map(props) {
    const burgers = useSelector(state => state.burgers);
    const [currentBurger, setCurrentBurger] = useState(0);

    const [viewport, setViewport] = useState();

    useEffect(() => {
        setViewport({
            latitude: 52.510811,
            longitude: 13.457461,
            zoom: 10,
            bearing: 0,
            pitch: 0
        })
    }, [])

    useEffect(() => {
        //     console.log('ändert sich ständig', burgers)
        //     if (burgers && burgers.length) {

        //         const lat = burgers[0].getLat();
        //         const long = burgers[0].getLong();

        //         if (lat && long) {
        //             setViewport({
        //                 ...viewport,
        //                 latitude: lat,
        //                 longitude: long
        //             })
        //         }
        //     }
    }, [burgers])

    const renderBurgerMarker = (burgers) => {
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
            latitude: burgers[nextBurger].getLat(),
            longitude: burgers[nextBurger].getLong()
        })
        setCurrentBurger(nextBurger);
    }

    return (
        <>
            <button onClick={() => nextBurger(currentBurger - 1)}>Prev Burger</button>
            <button onClick={() => nextBurger(currentBurger + 1)}>Next Burger</button>
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                {burgers && burgers.length ? renderBurgerMarker(burgers) : null}
            </MapGL>
        </>
    )
}

Map.propTypes = {

}

export default Map

