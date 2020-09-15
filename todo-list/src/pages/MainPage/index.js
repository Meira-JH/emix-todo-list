import React from "react";
import { MainPageWrapper } from "./style";
import TaskInput from "../../components/TaskInput";
import ToDo from "../../components/ToDo";
import Done from "../../components/Done";
import useLocalStorage from "../../hooks/useLocalStorage";

const MainPage = (props) => {
  const [taskList, setTaskList] = useLocalStorage("taskList", []);

  const handleDone = (taskDone) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskDone) {
        task.done = !task.done;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const handleEdit = (taskToEdit) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskToEdit) {
        task.edit = !task.edit;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const handleDelete = (taskToDelete) => {
    const newTaskList = taskList.filter((task) => task.id !== taskToDelete);
    setTaskList(newTaskList);
  };

  const updateTask = (taskUpdate) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskUpdate.id) {
        task.description = taskUpdate.description;
        task.edit = !task.edit;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  return (
    <MainPageWrapper>
      <TaskInput
        setNewTask={(newTask) => setTaskList([...taskList, newTask])}
      />
      <ToDo
        key="todo-main-key"
        taskList={taskList}
        taskToEdit={(taskToEdit) => handleEdit(taskToEdit)}
        taskUpdate={(taskUpdate) => updateTask(taskUpdate)}
        taskToDelete={(taskToDelete) => handleDelete(taskToDelete)}
        taskDone={(taskDone) => handleDone(taskDone)}
      />
      <Done
        key="done-main-key"
        taskList={taskList}
        taskToDelete={(taskToDelete) => handleDelete(taskToDelete)}
        taskDone={(taskDone) => handleDone(taskDone)}
      />
    </MainPageWrapper>
  );
};

export default MainPage;
