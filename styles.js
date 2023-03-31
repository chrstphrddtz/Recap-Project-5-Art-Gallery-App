import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    background-color: whitesmoke;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
  }
`;
