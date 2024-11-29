import {useContext} from "react";
import {TodoContext} from "../App";


const DoneList = () => {
    const {state: todoList} = useContext(TodoContext);
    const doneList = todoList.filter((todoItem) => todoItem.done);

    return (
        <div>
            {doneList.map((doneItem) => {
                return <div>{doneItem.text}</div>
            })}
        </div>
    )
}

export default DoneList;
