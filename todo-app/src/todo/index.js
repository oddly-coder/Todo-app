
import './todo.css';

const todo = ({todo, handleToggle}) => {
    const handleClick = (e) =>{
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
  return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} style={{textTransform:"uppercase"}}className={todo.complete ? "strike" : ""}>
        {todo.task}
    </div>
  );
}

export default todo;
