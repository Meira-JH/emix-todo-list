import React from "react";
import { Bold, HeaderWrapper, Thin } from "./style";
import logo from "../../img/e.Mix - Logo.svg";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <span>
        <Bold>TODO</Bold>
        <Thin>LIST</Thin>
      </span>
      <img alt="emix logo" src={logo} />
    </HeaderWrapper>
  );
};

export default Header;
