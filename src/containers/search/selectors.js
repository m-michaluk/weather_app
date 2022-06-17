import {createSelector} from 'reselect';
import {prop} from 'ramda';

import {SEARCH_REDUCER_NAME} from './reducer';

const getSearchReducerState = prop(SEARCH_REDUCER_NAME);

export const forecastTypeSelector = createSelector(
    getSearchReducerState,
    (searchParams) => searchParams.get('forecastType')
);

export const geolocationSelector = createSelector(
    getSearchReducerState,
    (searchParams) => searchParams.get('geolocation')
)

export const coordinatesSelector = createSelector(
    geolocationSelector,
    (geolocation) => geolocation.get('coordinates')
)

export const useGeolocationSelector = createSelector(
    geolocationSelector,
    (geolocation) => geolocation.get('useGeolocation')
)

export const autocompleteSelector = createSelector(
    getSearchReducerState,
    (searchParams) => searchParams.get('autocomplete')
)

export const citySelector = createSelector(
    autocompleteSelector,
    (autocomplete) => autocomplete.get('city')
)

export const citySuggestionsSelector = createSelector(
    autocompleteSelector,
    (autocomplete) => autocomplete.get('citySuggestions')
)

export const searchParamsSelector = createSelector(
    geolocationSelector,
    citySelector,
    forecastTypeSelector,
    (geolocation, city, type) => ({
        forecastType: type,
        q: geolocation.get('useGeolocation') ? geolocation.get('coordinates').latitude + "," + geolocation.get('coordinates').longitude : city
    })
)