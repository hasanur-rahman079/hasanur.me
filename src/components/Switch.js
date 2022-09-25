import React, { useState } from "react";
import styled from "styled-components";

const SwitchStyle = styled.div`
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
    margin: 0 0.75rem;

    input[type="checkbox"] {
      display: none;
    }

    .switch {
      position: absolute;
      cursor: pointer;
      background-color: #DDCEC8;
      border-radius: 25px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: background-color 0.2s ease;

      &::before {
        position: absolute;
        content: "";
        left: 2px;
        top: 2px;
        width: 18px;
        height: 18px;
        background-color: #B03503;
        border-radius: 50%;
        transition: transform 0.3s ease;
      }
    }

    input[type="checkbox"]:checked + .switch::before {
      transform: translateX(23px);
      background-color: #B03503;
    }

    input[type="checkbox"]:checked + .switch {
      background-color: #d0d5df;
    }
  }
`;

function Switch({ toggleTheme }) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <SwitchStyle>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </SwitchStyle>
  );
}
export default Switch;
