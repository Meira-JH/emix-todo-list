const initialState = {
  taskList: [
    {
      description: "Tarefa teste 1",
      done: false,
      id: "1234",
      order: 1,
    },
    {
      description: "Tarefa teste 2",
      done: false,
      id: "1235",
      order: 2,
    },
    {
      description: "Tarefa teste 2",
      done: true,
      id: "1235",
      order: 2,
    },
  ],
};

const taskList = (state = initialState, action) => {
    console.log(action.type, action.payload)
  switch (action.type) {
    case "SET_TASK_LIST": {
      return { ...state, taskList: action.payload.taskList };
    }
    default:
      return state;
  }
};

export default taskList;
