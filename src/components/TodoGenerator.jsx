import {useContext, useState} from "react";
import {TodoContext} from "../App";
import './TodoGenerator.css';
import {ActionEnum} from "../enums/ActionEnum";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text !== null) {
            dispatch({type: ActionEnum.ADD, payload: text});
            setText("");
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