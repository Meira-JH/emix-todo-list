import React, { useEffect, useState } from "react";
import {
  HeaderWrapper,
} from "./style";
import { connect } from "react-redux";
import logo from '../../img/e.Mix - Logo.svg'

const Header = (props) => {

  return (
    <HeaderWrapper>
        <span>TODOLIST</span>
        <img alt="emix logo" src={logo}/>
    </HeaderWrapper>
  );
};


const mapStateToProps = (state) => ({
});


export default connect(mapStateToProps, null)(Header);