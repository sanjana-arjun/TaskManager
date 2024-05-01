import './index.css'

const TaskList = props => {
  const {contactDetails} = props
  const {taskName, description, dueDate, status} = contactDetails
  return (
    <li className="listitems">
      <h3 className="name">TaskName-{taskName}</h3>
      <p className="desc">Description-{description}</p>
      <p className="date">Date-{dueDate}</p>
      <p className="name">Status-{status}</p>
    </li>
  )
}

export default TaskList
