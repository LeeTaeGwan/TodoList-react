import './TodoItem.css'

function TodoItem({todo}) {
  
  return(
    <div className = "todoItem">
      <input type="checkbox" />
      {todo.text}
      <button>삭제</button>
    </div>
  )
}

export default TodoItem