import {useContext} from 'react';
import {TodoContext} from "../App";
import './TodoItem.css';
import {ActionEnum} from "../enums/ActionEnum";
import {deleteTodoItem, toggleTodoItem} from "../api/todo";
import {DeleteOutlined} from "@ant-design/icons";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {done, text, id} = props.todoItem;

    const handleDelete = async () => {
        try {
            await deleteTodoItem(id);
            dispatch({type: ActionEnum.DELETE, payload: id});
        } catch (error) {
            console.error(error);
        }
    }

    const handleToggle = async () => {
        try {
            await toggleTodoItem(id);
            dispatch({type: ActionEnum.TOGGLE, payload: id})
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="todo-item-container">
            <span onClick={handleToggle}
                  className={`todo-item-wrapper ${done ? "done" : ""}`}>
                {text}
            </span>
            <button onClick={handleDelete}>
                <DeleteOutlined/>
            </button>
        </div>
    )
}

export default TodoItem;
