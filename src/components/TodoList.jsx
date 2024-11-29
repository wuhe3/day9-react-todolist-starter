import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator"
import {useContext, useEffect} from 'react';
import {TodoContext} from "../App";
import {getTodoList} from "../api/todo";
import {ActionEnum} from "../enums/ActionEnum";


const TodoList = () => {
    const {state: todoList, dispatch} = useContext(TodoContext);
    const description = "Add the things you need to do today..."

    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: ActionEnum.INIT, payload: todos})
        });
    }, []);


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