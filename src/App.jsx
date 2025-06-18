import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheckFill } from 'react-icons/bs'

import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

import './App.css'

const API = "http://localhost:5000"

function App() {

  const [tielt, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, seTodos] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  )
}

export default App
