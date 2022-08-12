import {TodoContext} from "../context/TodoContext";
import React, {useEffect, useState} from "react";
import {Todo} from "../components/TodoCard";
import {IonLoading, useIonToast} from "@ionic/react";
import useTodos from "../hooks/useTodos";

export const INITIAL_TODO = {
  id: 0,
  title: '',
  description: '',
  created_at: ''
}
const TodoContextProvider: React.FC = ({children}) => {
  const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
  } = useTodos();
  const [toast] = useIonToast();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todoFormModalState, setTodoFormModalState] = useState({
    isOpen: false,
    todo: {
      ...INITIAL_TODO
    }
  })
  const [todoDeleteModalState, setTodoDeleteModalState] = useState({
    isOpen: false,
    todoId: 0,
  })
  const [isSavingData, setIsSavingData] = useState(false);
  useEffect(() => {
    (async () => {
      toast("Fetching todos...", 3000);
      const todosResult: Todo[] = await getAllTodos();
      setTodos(todosResult);
      toast("Fetched successfully.", 3000)
      setIsLoading(false);
    })();
  }, []);
  const onDeleteTodoClick = (todoId: number) => {
    setTodoDeleteModalState({
      isOpen: true,
      todoId
    });
  }
  const closeTodoDeleteModal = () => {
    setTodoDeleteModalState({
      isOpen: false,
      todoId: 0
    });
  }
  const onDeleteTodoSubmit = async () => {
    const {todoId} = todoDeleteModalState;
    toast("Deleting todo...", 3000);
    await deleteTodo(todoId);
    setTodos(prev => prev.filter(({id}) => id !== todoId))
    toast("Deleted successfully", 3000);
    closeTodoDeleteModal();
  }
  const onEditTodoClick = (todo: Todo) => {
    setTodoFormModalState({
      isOpen: true,
      todo
    });
  }
  const onAddNewTodoButtonClick = () => {
    setTodoFormModalState({
      isOpen: true,
      todo: {
        ...INITIAL_TODO
      }
    });
  }
  const closeTodoFormModal = () => {
    setTodoFormModalState({
      isOpen: false,
      todo: {
        ...INITIAL_TODO
      }
    });
  }
  const onSubmit = async (todo: Todo) => {
    setIsSavingData(true);
    toast("Saving Todo...", 3000);
    if (todo.id === 0) {
      const insertedTodo = await createTodo(todo);
      setTodos(prev => prev.concat([insertedTodo]));
    } else {
      await updateTodo(todo)
      setTodos(prev => prev.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      }))
    }
    toast("Saved.", 3000);
    closeTodoFormModal();
    setIsSavingData(false);
  }
  const todoContextValue = {
    todos,
    todoFormModalState,
    todoDeleteModalState,
    onDeleteTodoClick,
    closeTodoDeleteModal,
    onDeleteTodoSubmit,
    onEditTodoClick,
    onAddNewTodoButtonClick,
    closeTodoFormModal,
    onSubmit,
  };
  if (isLoading) {
    return (
      <IonLoading
        isOpen={isLoading}
        onDidDismiss={() => setIsLoading(false)}
        message={'Loading...'}
      />
    )
  }
  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
}
export default TodoContextProvider;
