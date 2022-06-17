import {createGlobalStyle} from 'styled-components';
import {theme} from 'styled-tools';

export const GlobalStyle = createGlobalStyle`
    html {
         display: flex;
         background: ${theme('colors.background')};
         color: ${theme('colors.text')};
         font-size: ${theme('fonts.basic.fontSize')};
         font-family: ${theme('fonts.basic.fontFamily')};
    }
    * {
         font-family: ${theme('fonts.basic.fontFamily')};
    }
    body {
        height: 100%;
        width: 100%;
    }
`;