import {combineEpics, ofType} from "redux-observable";
import {catchError, filter, map, switchMap, takeUntil} from "rxjs/operators";
import {from, of, timer} from "rxjs";
import {SET_FORECAST} from "../forecast/const";
import {getGif} from "./api";
import {setGifUrl, startPollingGifs} from "./actions";
import {START_POLLING_GIFS} from "./const";
import {FORECAST_TYPES} from "../search/const";


const gifEpic = (action$, state$) =>
    action$.pipe(
        ofType(SET_FORECAST),
        filter(({forecast}) => forecast !== null),
        map((res) => {
            const {forecastType, forecast} = res.forecast;
            switch (forecastType) {
                case FORECAST_TYPES.DAILY:
                    return forecast.map((day) => day.condition.text);
                case FORECAST_TYPES.HOURLY:
                    return [res.forecast.day.condition.text];
                case FORECAST_TYPES.LIVE:
                    return [forecast.condition.text];
                default:
                    return [];
            }
        }),
        map((conditions) => {
            const countConditions = {};
            conditions.forEach((cond) => countConditions[cond] = 0);
            conditions.forEach((cond) => countConditions[cond] += 1)
            return countConditions;
        }),
        map((conditions) => startPollingGifs(conditions))
    )

const pollingGifsEpic = (action$, state$) =>
    action$.pipe(
        ofType(START_POLLING_GIFS),
        switchMap((action) => timer(0, 30 * 1000).pipe(
            takeUntil(action$.ofType(SET_FORECAST)),
            switchMap((pos) =>
                from(getGif(action.conditions, pos))
                    .pipe(
                        map((url) => setGifUrl(url)),
                        catchError(() => of(startPollingGifs(action.conditions)))
                    )
            )
        ))
    )

export const gifEpics = combineEpics(gifEpic, pollingGifsEpic);