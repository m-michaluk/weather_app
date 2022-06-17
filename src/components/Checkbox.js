import React from "react";


export const Checkbox = ({id, value, toggle}) => {
    return (
        <div>
            <input type={"checkbox"} id={id} checked={value} onChange={toggle}
                   style={{width: "15px", height: "15px"}}></input>
            <label htmlFor={id}>Use my geolocation</label>
        </div>
    )
}