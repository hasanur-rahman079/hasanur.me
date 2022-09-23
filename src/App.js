import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/custom.scss";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.config";
import NavMenu from "./components/NavMenu";
import ScrollToTop from "./components/ScrollToTop";
import { About } from "./pages/About";
import { Awards } from "./pages/Awards";
import { Experiences } from "./pages/Experiences";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import { Publications } from "./pages/Publications";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";

const AppStyles = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: #d0d5df;
  transition: all 0.25s ease;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AppStyles>
          <Router>
            <ScrollToTop />
            <NavMenu toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/works" element={<Works />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </AppStyles>
      </ThemeProvider>
    </>
  );
}

export default App;
