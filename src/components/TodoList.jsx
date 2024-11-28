import React from 'react';
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator"

const TodoList = () => {
    return (
        <div>
            <TodoGroup></TodoGroup>
            <TodoGenerator></TodoGenerator>
        </div>
    );
}

export default TodoList