import React from "react";
import {useSelector} from "react-redux";
import {forecastSelector, loadingSelector} from "../selectors";
import {Spinner} from "../../../components";
import {FORECAST_TYPES} from "../../search/const";
import {ForecastDays, ForecastHourly, ForecastLive} from "./forecastType";

export const Forecast = () => {
    const loading = useSelector(loadingSelector);
    const forecast = useSelector(forecastSelector);

    return (
        <div>
            {loading && <Spinner/>}
            {!loading && forecast &&
                <>
                    {forecast.forecastType === FORECAST_TYPES.DAILY && <ForecastDays/>}
                    {forecast.forecastType === FORECAST_TYPES.HOURLY && <ForecastHourly/>}
                    {forecast.forecastType === FORECAST_TYPES.LIVE && <ForecastLive/>}
                </>
            }
        </div>
    )
}
