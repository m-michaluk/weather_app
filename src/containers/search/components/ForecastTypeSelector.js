import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {forecastTypeSelector} from "../selectors";
import {setForecastType} from "../actions";
import {OptionButton} from "../../../components";
import {FORECAST_TYPES} from "../const";

export const ForecastTypeSelector = () => {
    const forecastType = useSelector(forecastTypeSelector);
    const dispatch = useDispatch();

    const onForecastTypeChange = useCallback(
        (event) => {
            const forecastType = event.target.value;
            dispatch(setForecastType(forecastType));
        }, [dispatch]
    );
    return (
        <>
            <OptionButton onClick={onForecastTypeChange} value={FORECAST_TYPES.DAILY} selectedValue={forecastType}
                          label={"Daily"}/>
            <OptionButton onClick={onForecastTypeChange} value={FORECAST_TYPES.HOURLY} selectedValue={forecastType}
                          label={"Hourly"}/>
            <OptionButton onClick={onForecastTypeChange} value={FORECAST_TYPES.LIVE} selectedValue={forecastType}
                          label={"Live"}/>
        </>
    )
}