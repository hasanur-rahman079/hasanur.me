import React from "react";
import { Route, Routes } from "react-router";

import {
  Home,
  About,
  Research,
  ProfAct,
  Gallary,
  Contact,
  Blogs,
  BlogDetails,
} from "./pages";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/research" element={<Research />} />
    <Route path="/experiences" element={<ProfAct />} />
    <Route path="/gallary" element={<Gallary />} />
    <Route path="/follow" element={<Contact />} />
    <Route exact path="/blog" element={<Blogs />} />
    <Route path="/blog/:slug" element={<BlogDetails />} />
  </Routes>
);
