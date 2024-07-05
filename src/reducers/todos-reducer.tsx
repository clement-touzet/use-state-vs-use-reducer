import { TodoType } from "../types/todo-type";

export type TodoActions =
  | {
      type: "add";
      newTodo: TodoType;
    }
  | {
      type: "delete";
      id: TodoType["id"];
    }
  | {
      type: "update";
      updatedTodo: TodoType;
    };

export const todosReducer = (todosState: TodoType[], action: TodoActions) => {
  switch (action.type) {
    case "add":
      return addTodo(todosState, action.newTodo);
    case "delete":
      return deleteTodo(todosState, action.id);
    case "update":
      return updateTodo(todosState, action.updatedTodo);
  }
};

const addTodo = (todos: TodoType[], newTodo: TodoType) => {
  return [...todos, newTodo];
};

const deleteTodo = (todosState: TodoType[], id: TodoType["id"]) => {
  return todosState.filter((todo) => todo.id !== id);
};

const updateTodo = (todosState: TodoType[], updatedTodo: TodoType) => {
  const index = todosState.findIndex((todo) => todo.id === updatedTodo.id);
  if (index === -1) return [...todosState]; // déclancher une erreur

  const todosCopy = [...todosState];
  todosCopy[index] = updatedTodo;
  return todosCopy;
};
