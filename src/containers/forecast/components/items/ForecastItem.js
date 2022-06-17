import React from "react";
import {HeaderWithIconWrapper} from "../Wrappers";

export const ForecastItem = ({forecast}) => {
    return (
        <div>
            <HeaderWithIconWrapper>
                <h4>Condition: {forecast.condition.text}</h4>
                <img src={forecast.condition.icon} alt={""}/>
            </HeaderWithIconWrapper>
            {forecast.time && <div>Time: {forecast.time}</div>}
            <div>Temp: {forecast.temp} °C</div>
            <div>Wind: {forecast.wind}km/h</div>
            <div>Humidity: {forecast.humidity}%</div>
            <div>Cloud: {forecast.cloud}%</div>
        </div>
    )
}