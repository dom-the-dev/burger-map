import React, { useEffect } from 'react'
import Map from '../components/Map';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

import { getBurgers } from '../redux/actions';
import Loading from '../components/Loading';

function Home() {

    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    const burgers = useSelector(state => state.burgers);

    useEffect(() => {
        dispatch(getBurgers());
    }, [dispatch])

    if (isLoading) {
        return <Loading text="Loading burgers.." />
    }

    if (!burgers.length) {
        return <Loading text="No burgers available :(" />
    }

    return (
        <div>
            <div style={menu}>
                {/* <span onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? <FontAwesomeIcon icon={faToggleOn} />
                        : <FontAwesomeIcon icon={faToggleOff} />
                    }
                </span> */}
                <a style={socialIcons} href="https://github.com/dom-the-dev/burger-map">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a style={socialIcons} href="https://twitter.com/dom_the_dev">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <Map burgers={burgers} />
        </div>
    )

}

const menu = {
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 10
}

const socialIcons = {
    color: 'black',
    fontSize: 22,
    marginTop: 20,
    marginRight: 10
}


export default Home

