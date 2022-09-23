import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, 
  body{
    position: relative;
    font-size: 10px;
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button{
    outline: none
  }

  .container {
    position: relative;
    max-width: 1200px;
    min-width: 95%;
    margin: 0 auto;
    padding: 0;
  }

  ::selection {
    color: black;
    background:  #fdb54a;
  }

`;
export default GlobalStyles;
