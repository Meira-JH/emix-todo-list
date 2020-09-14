import React from "react";
import { Title, ToDoWrapper } from "./style";
import CheckboxListToDo from "../CheckBoxListToDo";

const ToDo = ({
  taskList,
  taskToEdit,
  taskUpdate,
  taskToDelete,
  taskDone
}) => {
  return (
    <ToDoWrapper key={"wrapper-key"}>
      <Title>A FAZER</Title>
      <CheckboxListToDo
        key={"checkbox-key"}
        taskList={taskList}
        taskToEdit={taskToEdit}
        taskUpdate={taskUpdate}
        taskToDelete={taskToDelete}
        taskDone={taskDone}
      />
    </ToDoWrapper>
  );
};

export default ToDo;
