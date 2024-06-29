import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../App.css';

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({
        id: uuidv4(),
        text: todoText,
        completed: false
      });
      setTodoText('');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter a new task"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Task
        </button>
      </div>
    </form>
    </div>
  )
}

export default TodoForm;
