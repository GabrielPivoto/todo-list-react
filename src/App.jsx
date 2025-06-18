import { useState, useEffect } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

import './App.css'

const API = "http://localhost:5000"

function App() {

  const [todos, setTodos] = useState([])

  const loadTodos = async () => {
    try {
      const resp = await fetch(API + "/todos", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await resp.json()
      setTodos(data)
    } catch (error) {
      console.log(error)
    }
  }

  const addTodo = async (todo) => {
    try {
      const resp = await fetch(API + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      });

      if (resp.ok) {
        loadTodos()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeTodo = async (id) => {
    try {
      const resp = await fetch(API + "/todos/" + id, {
        method: "DELETE",
      })
      if (resp.ok)
        loadTodos()
    } catch (error) {
      console.log(error)
    }
  }

  const changeTodoStatus = async (todo) => {

    todo.done = !todo.done

    try {
      const resp = await fetch(API + "/todos/" + todo.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      })
      if(resp.ok)
        loadTodos()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadTodos()
  }, [])

  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleRemove={removeTodo} handleChange={changeTodoStatus}/>
    </div>
  )
}

export default App
