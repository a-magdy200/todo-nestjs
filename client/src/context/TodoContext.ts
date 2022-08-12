import {createContext} from "react";
import {INITIAL_TODO} from "../providers/TodoContextProvider";
import {Todo} from "../components/TodoCard";
interface TodoContextInterface {
  todos: Todo[]
  todoFormModalState: {
    isOpen: boolean,
    todo: Todo
  },
  todoDeleteModalState: {
    isOpen: boolean,
    todoId: number
  },
  onDeleteTodoClick: (todoId: number) => void,
  closeTodoDeleteModal: () => void,
  onDeleteTodoSubmit: () => void,
  onEditTodoClick: (todo: Todo) => void,
  onAddNewTodoButtonClick: () => void,
  closeTodoFormModal: () => void,
  onSubmit: (todo: Todo) => void,
}
export const TodoContext = createContext<TodoContextInterface>({
  todos: [],
  todoFormModalState: {
    isOpen: false,
    todo: {
      ...INITIAL_TODO
    }
  },
  todoDeleteModalState: {
    isOpen: false,
    todoId: 0
  },
  onDeleteTodoClick: (todoId: number) => {},
  closeTodoDeleteModal: () => {},
  onDeleteTodoSubmit: () => {},
  onEditTodoClick: (todo: Todo) => {},
  onAddNewTodoButtonClick: () => {},
  closeTodoFormModal: () => {},
  onSubmit: (todo: Todo) => {},
})
