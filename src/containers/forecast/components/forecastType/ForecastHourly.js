import React from "react";
import {useSelector} from "react-redux";
import {forecastSelector} from "../../selectors";
import {Location, DaySummary, ForecastItem} from "../items";

export const ForecastHourly = () => {
    const forecast = useSelector(forecastSelector);

    return (
        <div>
            <h1>Here's some hourly weather</h1>
            <Location location={forecast.location}></Location>
            <h3>Day summary:</h3>
            <DaySummary day={forecast.day} index={0}/>
            <h3>Hourly:</h3>
            {forecast.forecast.map((hour, i) => (
                <div key={i}>
                    <ForecastItem forecast={hour}/>
                    <hr/>
                </div>
            ))}
        </div>
    )
}