import react from 'react'
import TodoItem from './TodoItem'


function TodoList({todoList, delTodo}) {
  
  return (
    <div>
      {
        todoList.map((todo) => {
          return <TodoItem key = {todo.id} todo = {todo} delTodo={delTodo}/>
        })
      }
    </div>
  )
}

export default TodoList