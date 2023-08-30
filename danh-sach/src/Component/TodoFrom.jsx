import React from 'react'
import Button from './Button'

const TodoFrom = () => {
  return (
    <form action="" className="todo-form">
        <input type="text" className="todo-input"/>
        <Button variant="primary">Create</Button>
    </form>
  )
}

export default TodoFrom