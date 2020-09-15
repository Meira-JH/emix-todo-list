import React from "react";
import { HeaderWrapper } from "./style";
import logo from "../../img/e.Mix - Logo.svg";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <span>TODOLIST</span>
      <img alt="emix logo" src={logo} />
    </HeaderWrapper>
  );
};

export default Header;
