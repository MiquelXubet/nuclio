import axios from "./axios";

export const createNewTask = (data) => axios.post('/tasks', data)