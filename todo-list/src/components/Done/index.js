import React from "react";
import { DoneWrapper } from "./style";
import CheckBoxListDone from "../CheckBoxListDone";
import { Title } from "../ToDo/style";

const Done = ({ taskList, taskToDelete, taskDone }) => {
  return (
    <DoneWrapper>
      <Title>FEITO</Title>
      <CheckBoxListDone 
      taskList={taskList} 
      taskToDelete={taskToDelete} 
      taskDone={taskDone} />
    </DoneWrapper>
  );
};

export default Done;
