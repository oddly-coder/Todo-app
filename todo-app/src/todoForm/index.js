import React, { useState } from 'react';
import './todoForm.css';

const TodoForm = ({addTask}) => {
    const[userInput, setUserInput] = useState('');
    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input 
            value={userInput} 
            placeholder="...enter new task" 
            className="form-control form-control-sm"
            onChange={handleChange}/>
            <button className='btn btn-primary mt-2'>Add task</button>
        </form>         
    </div>
    
  );
}

export default TodoForm;
