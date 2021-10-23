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

  
  return (
    <div>
      <div className = "container">
        <p className="todoText">TodoList</p>

        <div className="inputContainer">
          <input className = "inputText" type="text" placeholder="할 일을 추가하세요" />
          <button>추가</button>
        </div>

        <TodoList todoList = {todoList} />
      </div>
    </div>
  );
}

export default App;
