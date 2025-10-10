import { useState } from "react"
import "./TaskForm.css"

export default function TaskForm() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [category, setCategory] = useState('');
  return (
    <>
    <form className="task-form">
      <div className="task-form-input">
        <input type="text" className="task-form-input" placeholder="Enter your task here." onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </div>
      <div className="task-form-selectors">
        <select onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium" selected>Medium</option>
            <option value="low">Low</option>
        </select>
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value="general" selected>General</option>
            <option value="personal">Professional</option>
            <option value="work">Work</option>
            <option value="professional">Professional</option>
        </select>
      </div>
    </form>
    <h4>Output :: {task} {priority} {category} </h4>
    </>
  )
}
