import React from 'react';
import {ThemeProvider} from 'styled-components';
import {themes} from '../../themes';
import {GlobalStyle} from '../../globalStyles';
import {useSelector} from "react-redux";
import {themeSelector} from "../themeToggle/selectors";
import {LIGHT_THEME} from "../themeToggle/const";
import {WeatherForecast} from "../forecast";
import {Header} from "../header";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const App = () => {
    const selectedTheme = useSelector(themeSelector);
    return (
        <ThemeProvider theme={selectedTheme === LIGHT_THEME ? themes.lightTheme : themes.darkTheme}>
            <>
                <GlobalStyle/>
                <Header/>
                <WeatherForecast/>
            </>
        </ThemeProvider>
    )
};
