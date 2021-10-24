import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList'

let nextId = 3;
function App() {
  const [todoList, setTodoList] = useState([{
    id:1,
    text: 'test1',
    checked: false
  },
  {
    id:2,
    text: 'test2',
    checked: false
  }])

  const [newTodo, setNewTodo] = useState('')

  function changeNewTodo(e) {
    setNewTodo(e.target.value)
  }

  function addTodo() {
    const NewTodo = {
      id:nextId,
      text: newTodo,
      checked: false
    }
    setTodoList([...todoList, NewTodo])
    nextId++
  }

  function delTodo(e,id) {
    const updateTodo = todoList.filter((todo) => {
      return !(todo.id === id)
    })
    setTodoList(updateTodo)
  }

  return (
    <div>
      <div className = "container">
        <p className="todoText">TodoList</p>

        <div className="inputContainer">
          <input className = "inputText" type="text" placeholder="할 일을 추가하세요" onChange={changeNewTodo} />
          <button onClick={addTodo}>추가</button>
        </div>

        <TodoList todoList = {todoList} delTodo={delTodo} />
      </div>
    </div>
  );
}

export default App;

// addTodo 버튼을 클릭했을 때 말고도 enter를 쳤을 때도
// todo를 추가했을 때 input창 초기화
// input창에 아무것도 없이 추가 버튼을 눌렀을 때 경고창