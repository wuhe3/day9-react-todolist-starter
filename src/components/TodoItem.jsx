import {useContext, useState} from 'react';
import {TodoContext} from "../App";
import './TodoItem.css';
import {ActionEnum} from "../enums/ActionEnum";
import {deleteTodoItem, toggleTodoItem, editTodoItem} from "../api/todo";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const TodoItem = (props) => {
    const {dispatch} = useContext(TodoContext);
    const {done, text, id} = props.todoItem;

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(text);

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

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handelCancel = () => {
        setIsEditing(false);
        setNewText(text);
    }

    const handelSave = async () => {
        try {
            await editTodoItem(id, newText);
            dispatch({type: ActionEnum.EDIT, payload: {id, newText}});
            setIsEditing(false);
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
            <button onClick={handleEdit}>
                <EditOutlined/>
            </button>

            {isEditing &&
                (<div>
                        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)}/>
                        <button onClick={handelSave}>Save</button>
                        <button onClick={handelCancel}>Cancel</button>
                </div>
                )
            }

        </div>
    )
}

export default TodoItem;