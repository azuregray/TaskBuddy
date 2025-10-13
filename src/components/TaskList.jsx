export default function TaskList(tasks, updateTask, deleteTask) {
  return (
    <div className="task-list-wrapper">
      <ul className="task-list">
        {tasks.map((task, index) => {
          <li className="task-list-item">
            <div className="task-list-item-body">
              {task.text}
              <small> {task.priority} {task.category} </small>
            </div>
            <div className="task-list-item-buttons">
              <button>Mark as Complete</button>
              <button>Remove Task</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}
