import { useState } from "react"
import "./TaskForm.css"

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
      // prevent default refresh action to avoid resetting localStorage data
      e.preventDefault();

      // Calling the addTask() passed in parameter
      addTask({
        text: task,
        priority,
        category,
        completed: false
      });
      
      // reset fields to default after submitting task
      setTask('');
      setPriority('');
      setCategory('');
    }

  return (
    <form className="task-form" onSubmit={submitHandler}>
      <div className="task-form-input">
        <input type="text" className="task-form-input" placeholder="Enter your task here."  value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add Task</button>
      </div>
      <div className="task-form-selectors">
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="" disabled selected>Choose a value</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled selected>Choose a value</option>
          <option value="general">General</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="professional">Professional</option>
        </select>
      </div>
    </form>
  )
}
