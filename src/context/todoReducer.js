export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return action.payload !== "" ? [...state, action.payload] : state
        case "DELETE":
            return state.filter(todoItem => todoItem.id !== action.payload)
        case "TOGGLE":
            return state.map(todoItem =>
                todoItem.id === action.payload ? {...todoItem, done: !todoItem.done} : todoItem)
        case "INIT":
            return action.payload
        default:
            return state
    }
};