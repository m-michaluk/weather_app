import React from 'react';
import {SearchOptions} from "../search";
import {Forecast, WeatherForecastWrapper} from "./components";

export const WeatherForecast = () => {
    return (
        <div>
            <SearchOptions/>
            <WeatherForecastWrapper>
                <Forecast/>
            </WeatherForecastWrapper>
        </div>
    )
}