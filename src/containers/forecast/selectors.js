import {createSelector} from 'reselect';
import {prop} from 'ramda';

import {FORECAST_REDUCER_NAME} from "./reducer";

const getForecastReducerState = prop(FORECAST_REDUCER_NAME);

export const forecastSelector = createSelector(
    getForecastReducerState,
    (state) => state.get('forecast')
)

export const loadingSelector = createSelector(
    getForecastReducerState,
    (state) => state.get('loading')
)