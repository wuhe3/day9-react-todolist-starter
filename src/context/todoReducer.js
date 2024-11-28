export const initialState = [
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        case "DELETE":
            return state.filter(todoItem => todoItem.id !== action.payload)
        case "TOGGLE":
            return state.map(todoItem =>
                todoItem.id === action.payload ? {...todoItem, done: !todoItem.done} : todoItem)
        default:
            return state
    }
};