import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import './Todo.css';
import TodoItem, { Todo as ITodoItem } from "./TodoItems";


const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");
  
  const addTodo = () => {
    if (newTodo.trim()) {
      if (todos.some((todo) => todo.text === newTodo.trim())) {
        alert("This todo already exists!");
        return;
      }
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: newTodo.trim() },
      ]);
      setNewTodo("");
    }
  };
  

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearTodos = () => {
    if (window.confirm("Are you sure you want to clear all todos?")) {
      setTodos([]);
    }
  };
  const renderTodos = () =>
    todos.map((todo) => (
      <TodoItem
        className="todo__item"
        key={todo.id}
        todo={todo}
        onDelete={deleteTodo}
      />
    ));
  

  return (
    <div className="Todo">
      <h4>Todo App</h4>
      <div className="Todo__main">
        <input
          type="text"
          placeholder="Add your new todo..."
          value={newTodo}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <LuPlus className="Todo__main-icon" onClick={addTodo} />
      </div>
      <ul className="todo__list">
  {todos.length === 0 ? (
    <p className="todo__empty">No tasks added yet.</p>
  ) : (
    renderTodos()
  )}
  </ul>


      <div className="todo__footer">
      <p>
    You have {todos.length} pending task{todos.length === 1 ? "" : "s"}.
  </p>
        <button onClick={clearTodos}>Clear All</button>
      </div>
    </div>
  );
};

export default Todo;
