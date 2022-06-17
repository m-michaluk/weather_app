import React from "react";
import {DARK_ICON_URL, DARK_THEME, LIGHT_ICON_URL, LIGHT_THEME} from "../const";
import {IconWrapper} from "./IconWrapper";

export const ThemeIcon = ({onClick, theme}) => {
    return (
        <div>
            {theme === LIGHT_THEME && (
                <IconWrapper src={LIGHT_ICON_URL} onClick={onClick}/>
            )}
            {theme === DARK_THEME && (
                <IconWrapper src={DARK_ICON_URL} onClick={onClick}/>
            )}
        </div>
    )
}

