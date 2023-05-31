import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html{
    --white: #FFFFFF;
    --light-pink: #fff4f8;
    --dark-pink: #EE5889;
    --mid-pink: #FF93B5;
    --light-purple: #F8F6FC;
    --dark-purple: #503C76;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background: #F4F6F8;
  }
`;

export default GlobalStyles;
