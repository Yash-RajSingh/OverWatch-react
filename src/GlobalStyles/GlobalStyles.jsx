import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

html{
    --white: #FFFFFF;
    --light-pink: #FFF4F8;
    --dark-pink: #EE5889;
    --light-purple: #3F8F6FC;
    --dark-purple: #503C76;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;