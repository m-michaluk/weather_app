import {combineEpics, ofType} from "redux-observable";
import {catchError, filter, map, switchMap, take, takeUntil} from "rxjs/operators";
import {
    FORECAST_TYPES,
    GET_FORECAST,
    SEARCH_FORECAST,
    SET_CITY,
    STOP_LIVE_FORECAST,
    TOGGLE_USE_GEOLOCATION
} from "./const";

import {from, Observable, of, timer} from "rxjs";
import {getCitiesSuggestions, getForecast as getForecastAPI} from "./api";
import {searchParamsSelector, useGeolocationSelector} from "./selectors";
import {setForecast} from "../forecast/actions";
import {getForecast, setCitySuggestions, setCoordinates, stopLiveForecast} from "./actions";

export const getForecastEpic = (action$, state$) =>
    action$.pipe(
        ofType(GET_FORECAST),
        map(() => (searchParamsSelector(state$.value))),
        switchMap((request) =>
            from(getForecastAPI(request))
                .pipe(
                    map((forecast) => setForecast(forecast)),
                    catchError(() => of(setForecast(null), stopLiveForecast()))
                )
        ),
    )

const searchForecastEpic = (action$, state$) =>
    action$.pipe(
        ofType(SEARCH_FORECAST),
        filter(({forecastType}) => forecastType !== null),
        filter(({forecastType}) => forecastType !== FORECAST_TYPES.LIVE),
        map((q) => getForecast())
    )


const forecastLiveEpic = (action$, state$) =>
    action$.pipe(
        ofType(SEARCH_FORECAST),
        filter(({forecastType}) => forecastType === FORECAST_TYPES.LIVE),
        switchMap((query) => timer(0, 15 * 60 * 1000).pipe(
            takeUntil(action$.ofType(SEARCH_FORECAST, STOP_LIVE_FORECAST)),
            map(() => getForecast())
        ))
    )

export const getUserGeolocationEpic = (action$, state$) =>
    action$.pipe(
        ofType(TOGGLE_USE_GEOLOCATION),
        filter(() => useGeolocationSelector(state$.value) === true),
        switchMap(() => currentPosition$.pipe(
                take(1),
                map((position) => setCoordinates(position.coords))
            )
        ),
    )

const currentPosition$ = new Observable(observer => {
    navigator.geolocation.watchPosition(
        (position) => {
            observer.next(position);
        },
        error => {
            observer.error(error);
        },
    );
});


export const autocompleteEpic = (action$, state$) =>
    action$.pipe(
        ofType(SET_CITY),
        filter(({city}) => city.length !== 0),
        switchMap(({city}) =>
            from(getCitiesSuggestions(city)).pipe(
                map((cities) => setCitySuggestions(cities)),
                catchError(() => of(setCitySuggestions([])))
            )
        )
    );


export const searchEpics = combineEpics(getForecastEpic, getUserGeolocationEpic, forecastLiveEpic, searchForecastEpic, autocompleteEpic);