import react from 'react'
import TodoItem from './TodoItem'


function TodoList({todoList}) {
  
  return (
    <div>
      {
        todoList.map((todo) => {
          return <TodoItem key = {todo.id} todo = {todo}/>
        })
      }
    </div>
  )
}

export default TodoList