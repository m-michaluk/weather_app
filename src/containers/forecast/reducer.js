import {fromJS} from 'immutable';
import {SET_FORECAST} from "./const";
import {GET_FORECAST} from "../search/const";

export const FORECAST_REDUCER_NAME = 'forecast';

const initialState = fromJS({
    forecast: null,
    loading: false,
});


export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            const {forecast} = action;
            return state.set('forecast', forecast).set('loading', false);
        case GET_FORECAST:
            return state.set('loading', true);
        default:
            return state;
    }
};
