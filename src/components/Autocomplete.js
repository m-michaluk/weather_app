import React from "react";
import AutoComplete from "react-autocomplete";

export const Autocomplete = ({value, suggestions, onChange, onSelect, disabled, id}) => {
    return (
        <AutoComplete items={suggestions}
                      value={value}
                      onChange={onChange}
                      onSelect={onSelect}
                      getItemValue={(item) => item.name}
                      inputProps={{disabled: disabled, id: id, style: {borderRadius: "10px"}}}
                      renderItem={(item, isHighlighted) => (
                          <div key={item.id} style={{background: isHighlighted ? 'lightgray' : 'white'}}>
                              {item.name}
                          </div>)}
        />
    )
}