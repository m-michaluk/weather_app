import React, {useCallback} from "react";
import {searchForecast, toggleUseGeolocation} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import {useGeolocationSelector} from "./selectors";
import {AutocompleteCity, ForecastTypeSelector, SearchOptionsWrapper, SearchTypeWrapper} from "./components";
import {Button, Checkbox} from "../../components";

export const SearchOptions = () => {
    const dispatch = useDispatch();
    const useGeolocation = useSelector(useGeolocationSelector);

    const onToggleUseGeolocation = useCallback(() => dispatch(toggleUseGeolocation()), [dispatch])

    return (
        <SearchOptionsWrapper>
            <SearchTypeWrapper>
                <AutocompleteCity/>
                or
                <Checkbox id={"geolocation-checkbox"} value={useGeolocation} toggle={() => onToggleUseGeolocation()}/>
            </SearchTypeWrapper>
            <SearchTypeWrapper>
                <ForecastTypeSelector/>
            </SearchTypeWrapper>
            <SearchTypeWrapper>
                <Button onClick={() => dispatch(searchForecast())}><i className="fa fa-search"></i> Search</Button>
            </SearchTypeWrapper>
        </SearchOptionsWrapper>
    )
}