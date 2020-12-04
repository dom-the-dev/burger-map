import { combineReducers } from '@reduxjs/toolkit'
import burgers from './burgers'
import isLoading from './isLoading'

const appReducer = combineReducers({
    burgers,
    isLoading
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;
