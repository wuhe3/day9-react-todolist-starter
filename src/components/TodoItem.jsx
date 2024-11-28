import {useContext} from 'react';
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({type: "DELETE", payload: props.todoItem.id})
    }

    const handleToggle = () => {
        dispatch({type: "TOGGLE", payload: props.todoItem.id})
    }

    return (
        <div>
            <span onClick={handleToggle} style={{textDecoration: props.todoItem.done ? 'line-through' : 'none'}}>
                {props.todoItem.text}
            </span>
            <button onClick={handleDelete}>
                x
            </button>
        </div>

    )
}

export default TodoItem;
