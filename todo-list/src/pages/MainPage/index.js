import React, { useEffect, useState } from "react";
import {
  MainPageWrapper,
} from "./style";
import { connect } from "react-redux";
import TaskInput from "../../components/TaskInput";
import ToDo from "../../components/ToDo";
import Done from "../../components/Done";

const MainPage = (props) => {

  return (
    <MainPageWrapper>
      <TaskInput />
      <ToDo />
      <Done />
    </MainPageWrapper>
  );
};


const mapStateToProps = (state) => ({
});


export default connect(mapStateToProps, null)(MainPage);