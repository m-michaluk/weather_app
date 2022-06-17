import React from "react";
import {HeaderWrapper, Title} from "./components";
import {ThemeToggle} from "../themeToggle";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Title>Weather forecast</Title>
            <ThemeToggle/>
        </HeaderWrapper>
    )
}