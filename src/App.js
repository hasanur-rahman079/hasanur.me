import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.config";

import { NavMenu } from "./components";
import { Home, About, Research, ProfAct, Gallary, Contact } from "./pages";
import { Footer } from "./container";
import ScrollToTop from "./components/ScrollToTop";

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: #d0d5df;
  transition: all 0.25s ease;

  .contentWrap {
    flex: 1;
  }
`;

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <AppStyles>
            <NavMenu toggleTheme={toggleTheme} />
            <div className="contentWrap">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="/experiences" element={<ProfAct />} />
                <Route path="/gallary" element={<Gallary />} />
                <Route path="/follow" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </AppStyles>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
