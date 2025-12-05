import { createContext, useState, useContext } from 'react';
import taskData from '../../data/tasks.json';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState(taskData);

  function addNewTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  function toggleTaskCompleted(index) {
    const updated = [...taskList];
    updated[index].completed = !updated[index].completed;
    setTaskList(updated);
  }

  return (
    <TaskContext.Provider value={{ taskList, addNewTask, toggleTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}