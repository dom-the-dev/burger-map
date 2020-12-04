import axios from 'axios';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZG9tLXRoZS1kZXYiLCJhIjoiY2tpOTJ6dnUxMDUyYTJzcmtqNHlrYTgzYSJ9.A0f6gvahojPYcwQAidMaow';

const Endpoints = {
    getBurgers: () => {
        return axios.get(`https://my-burger-api.herokuapp.com/burgers`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.log(err)
            });
    },

    getCoordinates: (line1, line2, number, postCode, country) => {
        let searchKey = `${line1.replaceAll(' ', '&')}&${line2.replaceAll(' ', '&')}&${number.replaceAll(' ', '&')}&${postCode.replaceAll(' ', '&')}&${country.replaceAll(' ', '&')}`;
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchKey}.json?access_token=${MAPBOX_TOKEN}`)
            .then(res => {
                return res.data.features[0].center;
            })
            .catch(err => console.log('ERROR: ', err))
    }
}

export default Endpoints;