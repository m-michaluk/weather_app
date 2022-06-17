import {fromJS} from 'immutable';
import {
    SELECT_CITY,
    SET_CITY,
    SET_CITY_SUGGESTIONS,
    SET_COORDINATES,
    SET_FORECAST_TYPE,
    TOGGLE_USE_GEOLOCATION
} from "./const";

export const SEARCH_REDUCER_NAME = 'search';

const initialState = fromJS({
    autocomplete: {
        city: "",
        citySuggestions: [],
    },
    geolocation: {
        coordinates: {
            latitude: null,
            longitude: null,
        },
        useGeolocation: false,
    },
    forecastType: null,
});

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST_TYPE:
            const {forecastType} = action;
            return state.set('forecastType', forecastType);
        case TOGGLE_USE_GEOLOCATION:
            return state
                .updateIn(
                    ['geolocation', 'useGeolocation'],
                    (useGeolocation) => !useGeolocation
                )
                .setIn(['autocomplete', 'city'], "")
        case SET_COORDINATES:
            const {coordinates} = action;
            return state.setIn(['geolocation', 'coordinates'], coordinates)
        case SET_CITY:
            const {city} = action;
            return state.setIn(['autocomplete', 'city'], city);
        case SET_CITY_SUGGESTIONS:
            const {citySuggestions} = action;
            return state.setIn(['autocomplete', 'citySuggestions'], citySuggestions);
        case SELECT_CITY:
            const {selectedCity} = action;
            return state.setIn(['autocomplete', 'city'], selectedCity);
        default:
            return state;
    }
};
