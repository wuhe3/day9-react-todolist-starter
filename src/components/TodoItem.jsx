import {useContext} from 'react';
import {TodoContext} from "../App";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);

    const handleDelete = () => {
        dispatch({type: "DELETE", payload: props.id})
    }


    return (
        <div>
            <span>{props.todoItem.text}</span>
            <button onClick={handleDelete}>x</button>
        </div>

    )
}

export default TodoItem;
