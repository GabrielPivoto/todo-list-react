import { useState } from 'react'

import "./Form.css"

const Form = ({ addTodo }) => {

  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const todo = {
      title,
      time,
      done: false
    }

    addTodo(todo)

    setTitle("")
    setTime("")
  }

  return (
    <div className="form-todo">
      <h2>Create your next task:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">What is your next task?</label>
          <input
            type="text"
            name="title"
            placeholder="Task title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">Duration</label>
          <input
            type="text"
            name="time"
            placeholder="Task duration (hours)"
            onChange={(e) => setTime(e.target.value)}
            value={time || ""}
            required
          />
        </div>
        <button type="submit">Create task</button>
      </form>
    </div>
  )
}

export default Form