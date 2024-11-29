import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/DoneList";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <nav>
                        <Link to={"/todo-list"}>Todo List</Link>
                        <span> | </span>
                        <Link to={"/done-list"}>Done List</Link>
                    </nav>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                        <Route path={"/done-list"} element={<DoneList/>}/>
                        <Route path={"/todo-list"} element={<TodoList/>}/>
                        <Route path={"*"} element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
