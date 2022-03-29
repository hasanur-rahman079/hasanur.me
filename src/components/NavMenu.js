import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/publications">Publications</NavLink>
        </li>
        <li>
          <NavLink to="/works">Works</NavLink>
        </li>
        <li>
          <NavLink to="/experiences">Experiences</NavLink>
        </li>
        <li>
          <NavLink to="/awards">Awards</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
