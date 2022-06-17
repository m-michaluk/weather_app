import {SET_FORECAST} from "./const";

export const setForecast = (forecast) => ({
    type: SET_FORECAST,
    forecast
})