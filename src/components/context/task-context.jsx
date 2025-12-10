import { createContext, useState, useContext } from 'react';
import taskData from '../../data/tasks.json';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState(taskData); // Main tasks for TaskScreen
  const [calendarTasks, setCalendarTasks] = useState([]); // Tasks scheduled on calendar

  function addNewTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  function toggleTaskCompleted(index, calendar = false) {
    if (calendar) {
      const updated = [...calendarTasks];
      updated[index].completed = !updated[index].completed;
      setCalendarTasks(updated);
    } else {
      const updated = [...taskList];
      updated[index].completed = !updated[index].completed;
      setTaskList(updated);
    }
  }

  const addCalendarTask = (task) => 
    setCalendarTasks([...calendarTasks, { ...task, id: Date.now(), completed: false }]);

  return (
    <TaskContext.Provider value={{ 
      taskList,
      calendarTasks, 
      addNewTask,
      addCalendarTask, 
      toggleTaskCompleted 
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
