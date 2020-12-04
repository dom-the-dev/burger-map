import React, { useEffect } from 'react'
import Map from '../components/Map';
import { useSelector, useDispatch } from 'react-redux';
import { getBurgers } from '../redux/actions';

function Home() {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getBurgers());
    }, [])


    if (isLoading) {
        return 'IS LOADING THE FUCKING BURGERS';
    }

    return (
        <div>
            <h1>Homepage</h1>
            <Map />
        </div>
    )
}

export default Home

