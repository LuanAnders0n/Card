import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #ED3D3D;
    -webkit-font-smoothing: antialiased;
    color: #000000;
  }
  
  body, input, button {
    font: 400 16px 'Poppins', sans-serif;
  }

input{
  border: 0;
}

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }



`;
