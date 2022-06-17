import React, {useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {themeSelector} from "./selectors";
import {toggleTheme} from "./actions";
import {ThemeIcon} from "./components";

export const ThemeToggle = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();

    const changeTheme = useCallback(() => dispatch(toggleTheme()), [dispatch])

    return (
        <ThemeIcon theme={theme} onClick={() => changeTheme()}/>
    );
};