import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import './Todo.css';

interface Todo {
  id: number;
  text: string;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodo },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="Todo">
      <h4>Todo App</h4>
      <div className="Todo__main">
        <input
          type="text"
          placeholder="Add your new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <LuPlus className="Todo__main-icon" onClick={addTodo} />
      </div>
      <ul className="todo__list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo__item"
            onMouseEnter={(e) => e.currentTarget.setAttribute("data-hover", "true")}
            onMouseLeave={(e) => e.currentTarget.setAttribute("data-hover", "false")}
          >
            {todo.text}
            <HiOutlineTrash
              className="todo__item-icon"
              size={20}
              onClick={() => deleteTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
      <div className="todo__footer">
        <p>You have pending tasks</p>
        <button onClick={clearTodos}>Clear All</button>
      </div>
    </div>
  );
};

export default Todo;
