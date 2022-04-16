import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #1c1e24;
    --dark-light-bg: #282c34;
    --deep-dark: #1E1E1E;
    --gray-1: #BCB4B4;
    --gray-2: #363636;
    --gray-text:#d0d5df;
    --white : #eeeeee;
    --black: black;
    --carmine-pink: #e76161;
    --butterscotch: #fdb54a;
  }
  html{
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    background-color: var(--dark-light-bg);
    color: var(--gray-text);
  }

  h1, h2, h3, h4, h5{
    font-family: 'Helvetica Neue', sans-serif;
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
