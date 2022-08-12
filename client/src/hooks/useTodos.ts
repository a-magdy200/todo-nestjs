import {Todo} from "../components/TodoCard";
import axios from "axios";
import config from "../config";

const useTodos = () => {
  const getAllTodos = async () => {
    const response = await axios.get(config.apiUrl);
    return response.data;
  };
  const createTodo = async (todo: Todo): Promise<Todo> => {
    const response = await axios.post(config.apiUrl, {
      title: todo.title,
      description: todo.description
    });
    return response.data;
  };
  const deleteTodo = async (id: number) => {
    const response = await axios.delete(`${config.apiUrl}${id}`);
    return response.data
  };
  const updateTodo = async (todo: Todo) => {
    const response = await axios.patch(`${config.apiUrl}${todo.id}`, {
      title: todo.title,
      description: todo.description
    });
    return response.data
  };
  return {
    getAllTodos,
    createTodo,
    deleteTodo,
    updateTodo
  }
}
export default useTodos;
