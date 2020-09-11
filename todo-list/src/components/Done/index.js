import React, { useEffect, useState } from "react";
import {
  DoneWrapper,
} from "./style";
import { connect } from "react-redux";

const Done = (props) => {

  return (
    <DoneWrapper>
        <h3>FEITO</h3>
            <li></li>
            <li></li>
            <li></li>
    </DoneWrapper>
  );
};


const mapStateToProps = (state) => ({
});


export default connect(mapStateToProps, null)(Done);