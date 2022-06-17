import React, {useCallback} from "react"
import {WeatherGif} from "../../../gif";
import {HeaderWithIconWrapper, WeatherInfoWrapper} from "../Wrappers";

export const DaySummary = ({day, index}) => {

    const weatherDescription = useCallback(() => {
        let countNiceAttributes = (day.willItRain === 0) + (day.maxTemp <= 30 && day.minTemp >= 15) + (day.avgTemp >= 18 && day.avgTemp <= 25);
        if (countNiceAttributes === 3) return "nice";
        if (countNiceAttributes === 2) return "passable";
        return "not nice";
    }, [day])

    return (
        <div>
            <HeaderWithIconWrapper>
                <h3>Day: {day.date}</h3>
                <img src={day.condition.icon} alt={""}/>
            </HeaderWithIconWrapper>
            <div>The Weather will be {weatherDescription()}.</div>
            <div>Condition: {day.condition.text}</div>
            <WeatherInfoWrapper>
                <div>
                    <div>Min. temperature: {day.minTemp}°C</div>
                    <div>Max. temperature: {day.maxTemp}°C</div>
                    <div>Average temperature: {day.avgTemp}</div>
                    <div>Average humidity: {day.avgHumidity}</div>
                </div>
                <WeatherGif condition={day.condition.text} index={index}></WeatherGif>
            </WeatherInfoWrapper>
            <hr/>
        </div>
    )
}