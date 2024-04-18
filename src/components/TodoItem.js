import React from 'react';

const TodoItem = ({ id, text, completed, removeTodo, completeTodo }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded-md mb-2 ${
        completed ? 'bg-gray-200' : 'bg-white'
      }`}
    >
      <div className={`flex items-center ${completed && 'line-through'}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completeTodo(id)}
          className="mr-2"
        />
        <span>{text}</span>
      </div>
      <button onClick={() => removeTodo(id)} className="text-red-500 hover:text-red-600">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
