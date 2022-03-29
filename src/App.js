import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import { About } from "./pages/About";
import { Awards } from "./pages/Awards";
import { Experiences } from "./pages/Experiences";
import Home from "./pages/Home";
import { Publications } from "./pages/Publications";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/works" element={<Works />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
