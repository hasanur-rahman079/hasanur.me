import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import SunIcon from "./icons/SunIcon";
import Switch from "./Switch";
import MoonIcon from "./icons/MoonIcon";

const NavMenuStyles = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.2fr;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  background: ${(props) => props.theme.color.bg};

  .logo {
    display: grid;
    grid-column: 1/2;
    /* padding: 0.7rem 1.5rem 0; */

    a {
      color: ${(props) => props.theme.color.butterscotch};
      font-size: 20px;
      margin: 24.4px;
      font-weight: 700;
    }
  }

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    text-align: right;
    display: flex;
    grid-column: 2/3;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: ${(props) => props.theme.color.deep_dark};
      }

      a {
        display: inline-block;
        padding: 0 1.5rem;
        font-size: 16px;
        color: ${(props) => props.theme.color.gray_1};
        outline: none;
      }
      .active {
        color: ${(props) => props.theme.color.white};
      }
    }

    .closeNavIcon {
      display: none;
    }
  }

  .themeIcon {
    display: flex;
    grid-column: 3/4;
    margin: auto 0;
    align-items: center;
    font-size: 10px;
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
      background-color: ${(props) => props.theme.color.deep_dark};
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

export default function NavMenu({ toggleTheme }) {
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

      {/* 1st part logo */}
      <div className="logo">
        <h1>
          <NavLink to="/">MD. Hasanur Rahman</NavLink>
        </h1>
      </div>

      {/* 3rd part navmenus */}
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
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About me
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/academics"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Academic
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
            Research Activities
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
            Professional Activities
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallary"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Gallary
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
            Follow
          </NavLink>
        </li>
      </ul>

      {/* theme icon */}
      <div className="themeIcon">
        <SunIcon />
        <Switch toggleTheme={toggleTheme} />
        <MoonIcon />
      </div>
    </NavMenuStyles>
  );
}
