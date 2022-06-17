import React from "react";

export const Location = ({location}) => {
    return (
        <div>
            <h3>Location</h3>
            <div>Name: {location.name}</div>
            <div>Country: {location.country}</div>
            <hr/>
        </div>
    )
}