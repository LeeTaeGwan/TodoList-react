import { useState } from 'react'
import './TodoItem.css'

function TodoItem({todo, delTodo}) {
  const [checked, setChacked] = useState(todo.checked)

  function onChangeChecked(e) {
    if(e.target.checked) {
      setChacked(e.target.checked)
    } else {
      setChacked(e.target.checked)
    }
  }

  function delTodoIndex(e, id) {
    id = todo.id
    delTodo(e, id)
  }

  return(
    <div className = "todoItem" >
      <input type="checkbox" onClick={onChangeChecked}/>
      <div className={`text ${checked ? 'checked' : ''}`}>{todo.text}</div>
      <button onClick={delTodoIndex}>삭제</button>
    </div>
  )
}

export default TodoItem