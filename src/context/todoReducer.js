import { v4 as uuidv4 } from 'uuid';


export const initialState = [
    {id: uuidv4(), text: "the first todo", done: false},
    {id: uuidv4(), text: "the second todo", done: false},
    {id: uuidv4(), text: "the third todo", done: false},
    {id: uuidv4(), text: "the fourth todo", done: false},
    {id: uuidv4(), text: "the fifth todo", done: false},
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: uuidv4(), text: action.payload, done: false}]
        case "DELETE":
            return state.filter(todoItem => todoItem.id !== action.payload)
        case "TOGGLE":
            return state.map(todoItem =>
                todoItem.id === action.payload ? {...todoItem, done: !todoItem.done} : todoItem)
        default:
            return state
    }
};