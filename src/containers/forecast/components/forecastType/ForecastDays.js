import React from "react";
import {useSelector} from "react-redux";
import {forecastSelector} from "../../selectors";
import {DaySummary, Location} from "../items";

export const ForecastDays = () => {
    const forecast = useSelector(forecastSelector);

    // oblicza który gif ma się wyświetlać (żeby wyświetlały się różne gify w przypadku równych condition)
    const mapDayToGifIndex = () => {
        const count = {};
        const dayNrToGifIndex = [];
        forecast.forecast.forEach((day) => count[day.condition.text] = 0);
        forecast.forecast.forEach((day, i) => {
            dayNrToGifIndex.push(count[day.condition.text]);
            count[day.condition.text] += 1;
        })
        return dayNrToGifIndex;
    }

    return (
        <div>
            <h1>Here's some daily weather</h1>
            <Location location={forecast.location}></Location>
            <div>
                {forecast.forecast.map((day, i) => (
                    <DaySummary key={i} day={day} index={mapDayToGifIndex()[i]}/>
                ))}
            </div>
        </div>
    )
}