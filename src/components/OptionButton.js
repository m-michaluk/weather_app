import styled from 'styled-components';
import {theme} from "styled-tools";
import React from "react";

const Button = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 15px;
    background-color: ${props => props.selected ? theme('colors.button.selected.background') : theme('colors.button.background')};
    color: ${props => props.selected ? theme('colors.button.selected.text') : theme('colors.button.text')};
    font-size: 20px;
    border: solid 1px;
    cursor: pointer;
    border-color: ${theme('colors.button.border')};
    :hover {
        background-color: ${theme('colors.button.hover.background')};
        color: ${theme('colors.button.hover.text')};
    }
`;

export const OptionButton = ({value, selectedValue, onClick, label}) => (
    <div>
        <Button value={value} selected={value === selectedValue} onClick={onClick}>{label}</Button>
    </div>
)