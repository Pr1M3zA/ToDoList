import { useState } from 'react'
import './App.css'
import ToDoList from './Componentes/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ToDoList></ToDoList>
  )
}

export default App

