import {useContext, useEffect} from 'react';
import {TodoContext} from "../App";
import './TodoItem.css';
import {ActionEnum} from "../enums/ActionEnum";
import {deleteTodoItem} from "../api/todo";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {done, text, id} = props.todoItem;

    const handleDelete = () => {
        deleteTodoItem(id).then(() => {
            dispatch({type: ActionEnum.DELETE, payload: id})
        });
    }

    const handleToggle = () => {
        dispatch({type: ActionEnum.TOGGLE, payload: id})
    }

    return (
        <div className="todo-item-container">
            <span onClick={handleToggle}
                  className={`todo-item-wrapper ${done ? "done" : ""}`}>
                {text}
            </span>
            <button onClick={handleDelete}>
                x
            </button>
        </div>

    )
}

export default TodoItem;
