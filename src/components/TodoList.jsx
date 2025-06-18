import Todo from "./Todo"

import "./TodoList.css"

const TodoList = ({ todos, handleRemove, handleChange }) => {

  return (
    <div className="list-todo">
      <h2>Task List</h2>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo todo={todo} key={todo.id} handleRemove={handleRemove} handleChange={handleChange} />
        ))
      ) : (
        <p>No tasks!</p>
      )}
    </div>
  )
}

export default TodoList