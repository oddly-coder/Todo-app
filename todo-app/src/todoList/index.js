import Todo from '../todo';

import './todoList.css';

const todoList = ({todoList, handleFiltered, handleToggle}) => {
  return (
    <div className="container">
        {todoList.map(todo =>{
            return(
                <Todo todo = {todo} handleFiltered = {handleFiltered} handleToggle = {handleToggle}/>
            )
        })}
        <button className="btn btn-outline-dark mt-3" onClick = {handleFiltered}>Clear completed</button>
    </div>
  );
}

export default todoList;
