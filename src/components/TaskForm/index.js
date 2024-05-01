import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import TaskList from '../TaskList'
import './index.css'

const datalist = [
  {
    id: 1,
    taskName: 'Task 1',
    description: 'hello',
    dueDate: '24/05/2024',
    status: 'completed',
    assignee: 'User 1',
  },
  {
    id: 2,
    taskName: 'Task 2',
    description: 'hello',
    dueDate: '24/05/2024',
    status: 'in progress',
    assignee: 'User 2',
  },
  {
    id: 3,
    taskName: 'Task 3',
    description: 'hello',
    dueDate: '24/05/2024',
    status: 'pending',
    assignee: 'User 3',
  },
]

const data = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

class TaskForm extends Component {
  state = {
    taskName: '',
    description: '',
    dueDate: '',
    error: '',
    status: '',
    dataList: datalist,
  }

  startTask = taskId => `Task ${taskId} started`

  endTask = taskId => `Task ${taskId} started`

  completeTask = taskId => `Task ${taskId} started`

  handletaskNameChange = event => {
    this.setState({taskName: event.target.value})
  }

  handleDescChange = event => {
    this.setState({description: event.target.value})
  }

  handleDueChange = event => {
    this.setState({dueDate: event.target.value})
  }

  handledropChange = event => {
    this.setState({status: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {taskName, description, dueDate, status} = this.state
    const newContact = {
      taskName,
      description,
      dueDate,
      status,
    }

    this.setState(prevState => ({
      dataList: [...prevState.dataList, newContact],
      taskName: '',
      description: '',
      dueDate: '',
      status: '',
    }))
  }

  render() {
    const {taskName, description, dueDate, dataList, status} = this.state
    return (
      <div className="outercontainer">
        <h1 className="header">Task Manager</h1>
        <div className="maincontainer">
          <div className="division">
            <form onSubmit={this.handleSubmit} className="formcontainer">
              <label className="labelel">
                Task Name:
                <br />
                <input
                  type="text"
                  name="taskName"
                  value={taskName}
                  onChange={this.handletaskNameChange}
                  className="inputel"
                  placeholder="Enter Task name"
                  required
                />
              </label>
              <label className="labelel">
                Description:
                <br />
                <textarea
                  name="description"
                  value={description}
                  onChange={this.handleDescChange}
                  className="inputel"
                  placeholder="Enter Task Description"
                  required
                />
              </label>
              <label className="labelel">
                Due Date:
                <br />
                <input
                  type="date"
                  name="dueDate"
                  value={dueDate}
                  onChange={this.handleDueChange}
                  className="inputel"
                  required
                />
              </label>
              <label className="labelel">
                Status :
                <br />
                <select onChange={this.handledropChange}>
                  <option value="pending">pending</option>
                  <option value="in progress">in progress</option>
                  <option value="completed">completed</option>
                </select>
              </label>

              <button type="submit" className="buttonel">
                Add Task
              </button>
            </form>

            <ul className="contacts-table">
              {dataList.map(eachContact => (
                <TaskList key={eachContact.id} contactDetails={eachContact} />
              ))}
            </ul>
          </div>
          <div className="division">
            <div className="dropdowncontainer">
              <h3 className="assigntask">Assign Task</h3>
              <select>
                <option value="">Select User</option>
                {dataList.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.taskName}
                  </option>
                ))}
              </select>
            </div>
            <div className="buttonscontainer">
              <button
                type="button"
                onClick={this.startTask}
                className="button1"
              >
                pending
              </button>
              <button
                type="button"
                onClick={this.completeTask}
                className="button2"
              >
                in progress
              </button>
              <button type="button" onClick={this.endTask} className="button3">
                completed
              </button>
            </div>

            <div className="barcontainer">
              <h3>Data Visualization</h3>
              <ResponsiveContainer width="100%" height={800}>
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                  }}
                >
                  <XAxis
                    dataKey="group_name"
                    tick={{
                      stroke: 'gray',
                      strokeWidth: 1,
                    }}
                  />
                  <YAxis
                    tick={{
                      stroke: 'gray',
                      strokeWidth: 0,
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      padding: 30,
                    }}
                  />
                  <Bar
                    dataKey="girls"
                    name="assignee"
                    fill="#1f77b4"
                    barSize="20%"
                  />
                  <Bar
                    dataKey="boys"
                    name="dueDate"
                    fill="#fd7f0e"
                    barSize="20%"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskForm
