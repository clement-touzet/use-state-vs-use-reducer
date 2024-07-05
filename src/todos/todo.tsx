import { ChangeEvent, Dispatch, useState } from "react";
import { TodoType } from "../types/todo-type";
import { TodoActions } from "../reducers/todos-reducer";

type Props = {
  todo: TodoType;
  dispatchTodos: Dispatch<TodoActions>;
};

const Todo = ({ todo, dispatchTodos }: Props) => {
  const [editTodo, setEditTodo] = useState(false);
  const title = todo.title;
  const description = todo.description;

  const handleClickDelete = () => {
    dispatchTodos({
      type: "delete",
      id: todo.id,
    });
  };

  const handleClickEditTodo = () => {
    setEditTodo((editTodo) => !editTodo);
  };

  const handleUpdateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchTodos({
      type: "update",
      updatedTodo: {
        ...todo,
        title: e.target.value,
      },
    });
  };

  const handleUpdateDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchTodos({
      type: "update",
      updatedTodo: { ...todo, description: e.target.value },
    });
  };

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={handleClickDelete}>supprimer</button>

      {editTodo ? (
        <div className="">
          <input value={title} onChange={handleUpdateTitle} />
          <input value={description} onChange={handleUpdateDescription} />
        </div>
      ) : null}
      <button onClick={handleClickEditTodo}>
        Ouvrir/fermer menu d'édition
      </button>
    </div>
  );
};

export default Todo;
