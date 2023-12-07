import { createGlobalStyle } from 'styled-components';
import { breakPoint } from './deviceBreakPoint';

const GlobalStyle = createGlobalStyle`
:root{
    /* Brand Color */
    --brand-color: #B5CC22;
    --brand-color-dark: #677510;

    /* Grey */
    --color-grey-0: #fff;
    --color-grey-1: #f6f6f6;
    --color-grey-2: #ebebeb;
    --color-grey-3: #aeaeae;
    --color-grey-4: #323232;

    /* Font size */
    --default-font-size-small: 1.4rem;
    --default-font-size: 1.6rem;
    --default-font-size-medium: 1.8rem;
    --default-font-size-large: 2.4rem;

    /* Border Radius */
    --border-radius: 8px;
    --border-radius-large: 28px;
    --border-radius-button: 100px;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Noto Sans TC', sans-serif;
    font-size: var(--default-font-size);
    line-height: 2.4rem;
    color: var(--color-grey-4);

    @media ${breakPoint.mobile} {
    font-size: var(--default-font-size-small);
  }
}

input, button, select {
    font: inherit;
    color: inherit;
} 

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

`;

export default GlobalStyle;
