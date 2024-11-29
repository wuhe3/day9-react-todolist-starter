import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator"
import {useContext, useEffect, useState} from 'react';
import {TodoContext} from "../App";
import {getTodoList} from "../api/todo";
import {ActionEnum} from "../enums/ActionEnum";
import {Spin} from "antd";

const TodoList = () => {
    const [loading, setLoading] = useState(true);
    const {state: todoList, dispatch} = useContext(TodoContext);
    const description = "Add the things you need to do today..."
    const App: React.FC = () => <Spin fullscreen/>;

    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: ActionEnum.INIT, payload: todos})
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? <App/> : (
                <div>
                    <h1>TodoList</h1>
                    {todoList.length === 0 ? <p>{description}</p> : null}
                    <TodoGroup></TodoGroup>
                    <TodoGenerator></TodoGenerator>
                </div>
            )}
        </div>
    );
}

export default TodoList;