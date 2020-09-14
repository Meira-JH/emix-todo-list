
export function setTaskList (taskList) {
    return {
        type: "SET_TASK_LIST",
        payload: {
            taskList,
        }
    }
}