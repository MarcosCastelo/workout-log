import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
  }

  :root {
    --primary: #79031D;
    --secondary: #EDB518;
    --white: #F5F7F7;
    --black: #000407;
  }
`;