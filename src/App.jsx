import { useEffect, useState } from "react"
import './App.css'
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"

export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)))

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className="app">
      <header>
        <h1 className="app-header"> Task Buddy </h1>
        <h2 className="app-subheader"> Your true buddy. </h2>
      </header>
      <hr />
      <TaskForm addTask={ addTask } />
      <TaskList tasks={ tasks } updateTask={ updateTask } deleteTask={ deleteTask } />
      {
        tasks.length > 0 &&
        <ProgressTracker tasks={ tasks }/>
      }
      {
        tasks.length > 0 &&
        <button onClick={ clearTasks } className="app-clear-button">Clear all tasks</button>
      }
    </div>
  )
}
