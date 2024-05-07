import { useState, useEffect } from 'react'
import './style.css'
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function handleSubmit(e) {
    e.preventDefault()

    if (newItem) {
      setTodos(currentTodos => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false }
        ]
      })
    }

    setNewItem('')
  }

  function deleteAll() {
    setTodos([])
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  return (
    <div className="center-div">
      <h1 className="header">Todo List</h1>
      <form className="new-item-form">
        <input className="new-item" value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        <button className="item-btn" onClick={handleSubmit}>Add</button>
        <button className="item-btn" onClick={deleteAll}>Delete All</button>
      </form>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className='trash-icon'><FaTrashAlt /></button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App