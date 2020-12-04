const initialState = [];

const burgers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BURGERS':
            return action.payload;
        default:
            return state;
    }
};

export default burgers;
