import React from "react";
import { Route, Routes } from "react-router";

export default (
  <Routes>
    <Route path="/" />
    <Route path="/about" />
    <Route path="/research" />
    <Route path="/experiences" />
    <Route path="/gallary" />
    <Route path="/follow" />
    <Route exact path="/blog" />
  </Routes>
);
