import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 62.5%;
    overflow-x: hidden;

    --white: #fff;
    --purple: purple;
  }

  html, border-style, #root{
    max-width: 100vw;
    height: 100vh;
    width: 100%;
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Poppins;
  }
`;
