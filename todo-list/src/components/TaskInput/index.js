import React from "react";
import { AddButton, TaskInputWrapper, Input } from "./style";
import { IdGenerator } from "../../services/IdGenetor";
import useLocalStorage from "../../hooks/useLocalStorage";

const TaskInput = ({ setNewTask }) => {
  const [taskInput, setTaskInput] = useLocalStorage("taskInput", "");

  function handleInputTask(event) {
    if (
      event.target.name === "taskInput" ||
      event.keyCode === 8 ||
      event.charCode === 8
    ) {
      setTaskInput(event.target.value);
    }
    if (event.keyCode === 13 || event.charCode === 13) {
      addTask();
    }
  }

  const taskId = new IdGenerator().generate();

  function addTask() {
    const newTask = {
      id: taskId,
      description: taskInput,
      done: false,
      order: Date.now(),
      edit: true,
    };

    setNewTask(newTask);
    setTaskInput("");
  }

  return (
    <TaskInputWrapper>
      <Input
        value={taskInput}
        placeholder="Digite aqui uma nova tarefa..."
        onChange={handleInputTask}
        name="taskInput"
        onKeyDown={handleInputTask}
      />
      <AddButton onClick={addTask}>ADICIONAR</AddButton>
    </TaskInputWrapper>
  );
};

export default TaskInput;
