import {useContext, useState} from "react";
import {TodoContext} from "../App";
import './TodoGenerator.css';
import {ActionEnum} from "../enums/ActionEnum";
import {addTodoItem} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text !== null) {
            addTodoItem({id: Date.now(), text: text, done: false}).then((todoItem) => {
                dispatch({type: ActionEnum.ADD, payload: text});
                setText("");
            });
        }
    }

    return (
        <div>
            <input max={100} value={text} onChange={handleChange}/>
            <button className="add-button" onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;