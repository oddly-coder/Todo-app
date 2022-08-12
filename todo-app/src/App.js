import React, {useState} from 'react';
import data from './data.json';
import './App.css';

//components
import TodoHeader from './todoHeader';
import TodoList from './todoList';
import TodoFrom from './todoForm';


function App() {

  const [todoList, setTodoList] = useState(data);
  const handleToggle = (id) =>{
    let mapped = todoList.map(task =>{
      return task.id == id ? {...task, complete : !task.complete}:{...task} 
    });
    setTodoList(mapped);
  }
  const handleFiltered = () =>{
    let filtered = todoList.filter(task=>{
      return !task.complete
    });
    setTodoList(filtered);
  }
  const addTask = (userInput) =>{
    let copy = [...todoList];
    copy = [...copy, {id: todoList.length + 1, task: userInput, complete:false}];
    setTodoList(copy)
  }
  return (
    <React.Fragment>
        <div className="App top-space app-container">
          <TodoHeader/>
          <TodoList todoList = {todoList} handleFiltered = {handleFiltered} handleToggle = {handleToggle}/>
          <TodoFrom addTask = {addTask}/>
        </div>
    </React.Fragment>
  );
}

export default App;
