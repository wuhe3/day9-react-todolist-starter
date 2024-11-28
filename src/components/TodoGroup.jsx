import React, {useContext} from 'react';
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
    const {state: todoList} = useContext(TodoContext);

    return (
        <div>
            {todoList.map((todoItem) => {
                    return <TodoItem
                        key={todoItem.id}
                        todoItem={todoItem}>
                    </TodoItem>
                }
            )}
        </div>
    )
}

export default TodoGroup;
