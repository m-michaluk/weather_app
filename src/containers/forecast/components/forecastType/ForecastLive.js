import React from "react";
import {useSelector} from "react-redux";
import {forecastSelector} from "../../selectors";
import {FORECAST_TYPES} from "../../../search/const";
import {WeatherGif} from "../../../gif";
import {Location, ForecastItem} from "../items";
import {WeatherInfoWrapper} from "../Wrappers";


export const ForecastLive = () => {
    const forecast = useSelector(forecastSelector);
    return (
        <>
            {forecast && forecast.forecastType === FORECAST_TYPES.LIVE &&
                <div>
                    <h1>Here's some live weather</h1>
                    <Location location={forecast.location}></Location>
                    <h3>Last updated: {forecast.forecast.lastUpdated}</h3>
                    <WeatherInfoWrapper>
                        <ForecastItem key={1} forecast={forecast.forecast}/>
                        <WeatherGif condition={forecast.forecast.condition.text} index={0}/>
                    </WeatherInfoWrapper>
                </div>
            }
        </>
    )
}