import {useContext, useState} from "react";
import {TodoContext} from "../App";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text !== null) {
            dispatch({type: "ADD", payload: text});
            setText("");
        }
    }


    return (
        <div>
            <input value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;