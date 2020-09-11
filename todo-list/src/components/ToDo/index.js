import React, { useEffect, useState } from "react";
import {
  ToDoWrapper,
} from "./style";
import { connect } from "react-redux";

const ToDo = (props) => {

  return (
    <ToDoWrapper>
        <h3>A FAZER</h3>
            <li></li>
            <li></li>
            <li></li>
    </ToDoWrapper>
  );
};


const mapStateToProps = (state) => ({
});


export default connect(mapStateToProps, null)(ToDo);