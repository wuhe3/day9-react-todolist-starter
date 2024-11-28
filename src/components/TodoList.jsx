import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator"
import {useContext} from 'react';
import {TodoContext} from "../App";

const TodoList = () => {
    const {state: todoList} = useContext(TodoContext);
    const description = "Add the things you need to do today..."

    return (
        <div>
            <h1>TodoList</h1>
            {todoList.length === 0 ? <p>{description}</p> : null}
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    );
}

export default TodoList