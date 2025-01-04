import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
export interface Todo {
    id: number;
    text: string;
  }

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    className ?: string;
  }
  
  const TodoItem: React.FC<TodoItemProps> = React.memo(({ todo, onDelete }) => (
    <li className="todo__item">
      {todo.text}
      <HiOutlineTrash
        className="todo__item-icon"
        size={20}
        onClick={() => onDelete(todo.id)}
      />
    </li>
  ));

  export default React.memo(TodoItem);
  