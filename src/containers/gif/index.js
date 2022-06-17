import React from "react";
import {useSelector} from "react-redux";
import {gifUrlSelector} from "./selectors";

export const WeatherGif = ({condition, index}) => {
    const gifUrls = useSelector(gifUrlSelector);
    return (
        <>
            {gifUrls && gifUrls.get(condition) && index < gifUrls.get(condition).length &&
                <div>
                    <img src={gifUrls.get(condition)[index]} alt={""} style={{width: "550px", height: "350px"}}/>
                </div>}
        </>
    )
}

