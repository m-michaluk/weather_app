import {
    GET_FORECAST,
    SEARCH_FORECAST,
    SELECT_CITY,
    SET_CITY,
    SET_CITY_SUGGESTIONS,
    SET_COORDINATES,
    SET_FORECAST_TYPE,
    STOP_LIVE_FORECAST,
    TOGGLE_USE_GEOLOCATION
} from "./const";

export const setForecastType = (forecastType) => ({
    type: SET_FORECAST_TYPE,
    forecastType
});

export const toggleUseGeolocation = () => ({
    type: TOGGLE_USE_GEOLOCATION,
});


export const setCoordinates = (coordinates) => ({
    type: SET_COORDINATES,
    coordinates
});

export const setCity = (city) => ({
    type: SET_CITY,
    city
});

export const selectCity = (selectedCity) => ({
    type: SELECT_CITY,
    selectedCity
});

export const setCitySuggestions = (citySuggestions) => ({
    type: SET_CITY_SUGGESTIONS,
    citySuggestions
});


export const searchForecast = () => ({
    type: SEARCH_FORECAST,
});

export const getForecast = () => ({
    type: GET_FORECAST,
});

export const stopLiveForecast = () => ({
    type: STOP_LIVE_FORECAST,
})