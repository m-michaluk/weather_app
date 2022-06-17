import {combineReducers} from 'redux';

import {THEME_TOGGLE_REDUCER_NAME, themeReducer} from "./containers/themeToggle/reducer";
import {SEARCH_REDUCER_NAME, searchReducer} from "./containers/search/reducer";
import {FORECAST_REDUCER_NAME, forecastReducer} from "./containers/forecast/reducer";
import {GIF_REDUCER_NAME, gifReducer} from "./containers/gif/reducer";

export default function createReducer() {
    return combineReducers({
        [THEME_TOGGLE_REDUCER_NAME]: themeReducer,
        [SEARCH_REDUCER_NAME]: searchReducer,
        [FORECAST_REDUCER_NAME]: forecastReducer,
        [GIF_REDUCER_NAME]: gifReducer,
    });
}