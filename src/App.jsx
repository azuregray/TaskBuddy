import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Task Buddy</h1>
      <h2>Your true buddy.</h2>
      <hr />
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear all tasks</button>
    </div>
  )
}
