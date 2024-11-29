import axios from "axios";

const instance = axios.create({
    baseURL: 'https://67495c81868020296630ab02.mockapi.io/todo/',
    timeout: 5000
})

export const getTodoList = async () => {
    const response = await instance.get("/TodoItem")
    return response.data
}