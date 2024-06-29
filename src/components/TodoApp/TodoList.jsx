import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="divide-y divide-gray-300">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center py-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="mr-2"
          />
          <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
  