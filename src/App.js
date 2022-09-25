import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme.config";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Research from "./pages/Research";
import { ProfAct } from "./pages/ProfActivities";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <AppStyles>
          <Router>
            <NavMenu toggleTheme={toggleTheme} />
            <div class="contentWrap">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/research" element={<Research />} />
                <Route path="/experiences" element={<ProfAct />} />
                <Route path="/gallary" element={<Gallary />} />
                <Route path="/follow" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </AppStyles>
      </ThemeProvider>
    </>
  );
}

export default App;
