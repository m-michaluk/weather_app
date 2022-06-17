import React from "react";
import {Autocomplete} from "../../../components";
import {useDispatch, useSelector} from "react-redux";
import {citySelector, citySuggestionsSelector, useGeolocationSelector} from "../selectors";
import {selectCity, setCity} from "../actions";

export const AutocompleteCity = () => {
    const city = useSelector(citySelector);
    const citySuggestions = useSelector(citySuggestionsSelector);
    const disabled = useSelector(useGeolocationSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <label htmlFor={"autocompleteCity"}>Enter the city: </label>
            <Autocomplete id={"autocompleteCity"}
                          value={city} suggestions={citySuggestions} disabled={disabled}
                          onChange={(e) => dispatch(setCity(e.target.value))}
                          onSelect={(value) => dispatch(selectCity(value))}/>
        </div>
    )
}