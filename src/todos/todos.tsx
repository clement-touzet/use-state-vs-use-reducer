import { ChangeEvent, useReducer, useState } from "react";
import Todo from "./todo";

import { v4 as uuid } from "uuid";
import { todosReducer } from "../reducers/todos-reducer";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todos, dispatchTodos] = useReducer(todosReducer, [
    {
      id: uuid(),
      title: "Titre 1",
      description: "description 1",
    },
    {
      id: uuid(),
      title: "Titre 2",
      description: "description 2",
    },
  ]);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleClickAddTodo = () => {
    const newTodo = {
      id: uuid(),
      title: title,
      description: description,
    };
    dispatchTodos({
      type: "add",
      newTodo: newTodo,
    });
  };

  return (
    <div>
      <div>
        <input value={title} onChange={handleChangeTitle} />
        <input value={description} onChange={handleChangeDescription} />
        <button onClick={handleClickAddTodo}>Ajouter</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatchTodos={dispatchTodos} />
      ))}
    </div>
  );
};

export default Todos;
