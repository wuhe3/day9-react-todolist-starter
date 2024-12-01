import axios from "axios";

const instance = axios.create({
    baseURL: 'https://67495c81868020296630ab02.mockapi.io/todo/', timeout: 5000
})

export const getTodoList = async () => {
    const response = await instance.get("/TodoItem")
    return response.data
}

export const addTodoItem = async (todoItem) => {
    const response = await instance.post("/TodoItem")
    return response.data
}

export const deleteTodoItem = async (id) => {
    await instance.delete(`/TodoItem/${id}`)
}

export const toggleTodoItem = async (id) => {
    const todoItem = await instance.get(`/TodoItem/${id}`)
    await instance.put(`/TodoItem/${id}`, {
        ...todoItem.data, done: !todoItem.data.done
    })
}

export const editTodoItem = async (id, newText) => {
    return await instance.put(`/TodoItem/${id}`, {text: newText})
}