import {useContext} from 'react';
import {TodoContext} from "../App";
import './TodoItem.css';


const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({type: "DELETE", payload: props.todoItem.id})
    }

    const handleToggle = () => {
        dispatch({type: "TOGGLE", payload: props.todoItem.id})
    }

    return (
        <div className="todo-item-container">
            <span onClick={handleToggle} className="todo-item-wrapper"
                  style={{textDecoration: props.todoItem.done ? 'line-through' : 'none'}}>
                {props.todoItem.text}
            </span>
            <button onClick={handleDelete}>
                x
            </button>
        </div>

    )
}

export default TodoItem;
