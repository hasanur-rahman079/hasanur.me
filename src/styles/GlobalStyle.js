import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html, 
  body{
    font-size: 10px;
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

  .pageContainer{
    margin-top: calc(40px + 40px);
    padding: 0 2rem;
    margin-bottom: 40px;
  }


  ::selection {
    color: black;
    background:  #fdb54a;
  }

`;
export default GlobalStyles;
