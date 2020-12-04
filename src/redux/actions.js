import Endpoints from '../api/Endpoints';
import Burger from '../repository/Burger';

export const addBurgers = (burgers) => ({
    type: 'SET_BURGERS',
    payload: burgers
})

export const isLoading = (state) => ({
    type: 'SET_IS_LOADING',
    payload: state
})

export const getBurgers = () => {
    return (dispatch) => {
        dispatch(isLoading(true));

        Endpoints.getBurgers()
            .then(res => {
                let burgers = [];
                res.forEach(elem => {
                    burgers.push(new Burger(elem))
                });

                return burgers;
            })
            .then(burgers => {
                burgers.forEach(burger => {
                    Endpoints.getCoordinates(burger.getLine1(), burger.getLine2(), burger.getNumber(), burger.getPostCode(), burger.getCountry())
                        .then(coordinates => {
                            burger.setCoordinates(coordinates[0], coordinates[1]);
                        });
                })
                return burgers;
            })
            .then(burgers => {
                dispatch(addBurgers(burgers));
            })
            .finally(() => {
                dispatch(isLoading(false));
            });
    }
}