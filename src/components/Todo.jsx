import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'

import "./Todo.css"

const Todo = ({ todo, handleRemove, handleChange }) => {

    return (
        <div className="todo-form">
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duration: {todo.time}</p>
            <div className="actions">
                <span onClick={() => (handleChange(todo))}>{!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}</span>
                <BsTrash onClick={() => (handleRemove(todo.id))} />
            </div>
        </div>
    )
}

export default Todo