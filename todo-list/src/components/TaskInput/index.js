import React, { useEffect, useState } from "react";
import {
  TaskInputWrapper,
} from "./style";
import { connect } from "react-redux";

const TaskInput = (props) => {

  return (
    <TaskInputWrapper>
        <input />
        <button>Adicionar</button>
    </TaskInputWrapper>
  );
};


const mapStateToProps = (state) => ({
});


export default connect(mapStateToProps, null)(TaskInput);