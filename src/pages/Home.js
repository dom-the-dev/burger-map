import React, { useEffect } from 'react'
import Map from '../components/Map';
import { useSelector, useDispatch } from 'react-redux';
import { getBurgers } from '../redux/actions';
import Loading from '../components/Loading';

function Home() {

    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBurgers());
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    return <Map />
}

export default Home

