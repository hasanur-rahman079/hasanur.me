import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

  .logo {
    padding: 0.7rem 1.5rem 0;

    a {
      color: var(--butterscotch);
      font-size: 1.9rem;
    }
  }

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 80%;
    text-align: right;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }

      a {
        display: inline-block;
        padding: 1rem 1.5rem;
        font-size: 1.7rem;
        color: var(--gray-1);
        outline: none;
      }
      .active {
        color: var(--white);
      }
    }

    .closeNavIcon {
      display: none;
    }
  }

  .mobileMenuIcon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    display: none;
    outline: none;
    padding: 2px 8px;
    margin: auto 0;
    border-radius: 5px;
    * {
      pointer-events: none;
    }
    .text {
      font-size: 1.6rem;
      padding-right: 1rem;
    }
    .menuIcon {
      width: 2.2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0;

    .logo {
      padding: 8px 6px;

    }

    /* Step:3 Use the class that defined in the function */
    .hideItems {
      transform: translateX(calc(100% - var(--right)));
    }

    .mobileMenuIcon {
      display: flex;
    }

    .navItems {
      --right: -2rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      top: 1rem;
      right: 1rem;

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;

        * {
          pointer-events: none;
        }
      }

      li {
        display: block;
        margin-bottom: 1rem;
        text-align: center;
      }
    }
  }
`;

// There are 3 steps to works with the Nav items in react
// 1. Define the funciton for usestate react hook
// 2. Then define the onclick event for the targeted icons.
// 3. Then use the defined funciton to the targeted class (Ex. hideItems).

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobileMenuIcon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <span className="text">Menu</span>
        <span className="menuIcon">
          <MdMenu />
        </span>
      </div>

      <div className="logo">
        <h1>
          <NavLink to="/">MD. Hasanur Rahman</NavLink>
        </h1>
      </div>

      {/* Step-2: Call the step1 defined function. here if the shownave is false then call the 2 class NavItems
      and hideItems and if the showNav is true then call only one one class navItems */}
      <ul className={!showNav ? "navItems hideItems" : "navItems"}>
        {/* Step-1: Define the funciton. If the value of shownav false then The onclick event will make it true as the same
        way if it is true then it'll make it flase. 
        The exclammatory symbol is means reverse of the event
        
        #onKeyDown function means it'll run the tab even if you press any tab */}

        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>

        <li>
          <NavLink
            to="/"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/publications"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Publications
          </NavLink>
        </li>

        {/* 
        <li>
          <NavLink
            to="/works"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/awards"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Awards
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li> */}
      </ul>
    </NavMenuStyles>
  );
}
