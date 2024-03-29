import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { SunIcon, Switch, MoonIcon } from "../components";
import { FaStream } from "react-icons/fa";

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
  box-shadow: ${(props) => props.theme.shadow.light};

  .logo {
    display: grid;
    grid-column: 1/2;
    justify-content: flex-start;

    a {
      color: ${(props) => props.theme.color.butterscotch};
      font-size: 20px;
      font-weight: 700;
    }
  }

  .navItems {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    text-align: right;
    display: flex;
    grid-column: 2/3;
    justify-content: right;

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
        color: ${(props) => props.theme.color.nav_menu};
        outline: none;
      }

      .active {
        color: ${(props) => props.theme.color.nav_menu_active};
        font-weight: 600;
      }
    }

    .closeNavIcon {
      display: none;
    }
  }

  .themeIcon {
    display: flex;
    grid-column: 3/4;
    align-items: center;
    font-size: 10px;
    line-height: 0;
    justify-content: flex-end;
  }

  .mobileMenuIcon {
    position: absolute;
    right: 0;
    cursor: pointer;
    display: none;
    outline: none;
    border-radius: 5px;
    color: ${(props) => props.theme.color.nav_menu};
    text-align: right;

    * {
      pointer-events: none;
    }

    .text {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 0;
    }

    .menuIcon {
      color: ${(props) => props.theme.color.nav_menu};
      font-weight: 600;

      svg {
        font-size: 17px;
        margin-left: 5px;
      }
    }
  }

  @media only screen and (max-width: 1261px) {
    .navItems {
      li {
        a {
          font-size: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 998px) {
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
    padding: 0.2rem 10px;
    align-items: center;

    .logo {
      grid-column: 1/2;
      align-self: center;

      a {
        font-size: 1.6rem;
        margin: 0;
      }
    }

    .themeIcon {
      grid-column: 2/3;
      align-self: center;
    }

    /* Step:3 Use the class that defined in the function */
    .mobileMenuIcon {
      display: flex;
      grid-column: 3/4;
      align-items: center;
    }

    .hideItems {
      transform: translateX(calc(100% - var(--right)));
    }

    .navItems {
      --right: -2rem;
      transition: 0.3s ease transform;
      background-color: ${(props) => props.theme.color.bg_light};
      display: block;
      grid-column: auto;
      padding: 2rem;
      width: 90%;
      max-width: 400px;
      border-radius: 12px;
      position: absolute;
      top: 0;
      right: 1rem;
      z-index: 1;

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        color: ${(props) => props.theme.color.nav_menu};
        font-size: 2.5rem;
        font-weight: 600;

        * {
          pointer-events: none;
        }
      }

      li {
        display: block;
        margin-bottom: 2rem;
        text-align: center;

        a {
          font-size: 19px;
        }
      }
    }
  }

  @media only screen and (max-width: 377px) {
    .logo {
      a {
        font-size: 1.5rem;
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
          <FaStream />
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
            to="/research"
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
            to="/follow"
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
