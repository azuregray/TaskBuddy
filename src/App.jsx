import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"
import './App.css'
import { useEffect, useState } from "react"

export default function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <h1>Task Buddy</h1>
      <h2>Your true buddy.</h2>
      <hr />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}
