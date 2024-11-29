import {useContext} from 'react';
import {TodoContext} from "../App";
import './TodoItem.css';


const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {done, text, id} = props.todoItem;

    const handleDelete = () => {
        dispatch({type: "DELETE", payload: id})
    }

    const handleToggle = () => {
        dispatch({type: "TOGGLE", payload: id})
    }

    return (
        <div className="todo-item-container">
            <span onClick={handleToggle} className="todo-item-wrapper"
                  style={{textDecoration: done ? 'line-through' : 'none'}}>
                {text}
            </span>
            <button onClick={handleDelete}>
                x
            </button>
        </div>

    )
}

export default TodoItem;
