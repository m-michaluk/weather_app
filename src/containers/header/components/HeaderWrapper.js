import styled from 'styled-components';
import {theme} from "styled-tools";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${theme('colors.header.background')};
    justify-content: space-between;
`;