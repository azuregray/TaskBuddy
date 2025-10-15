export default function TaskList({tasks, updateTask, deleteTask}) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  }

  return (
    <div className="task-list-wrapper">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="task-list-item" key={index}>
            <div className="task-list-item-body">
              <span> {task.text} </span>
              <small> ({task.priority}, {task.category}) </small>
            </div>
            <div className="task-list-item-buttons-wrapper">
              <button onClick={() => toggleComplete(index)}> {task.completed ? 'Undo' : 'Mark as Complete'} </button>
              <button onClick={() => deleteTask(index)}> Remove Task </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
