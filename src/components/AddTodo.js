import React, { useContext,useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
      />
      <button type="submit" className="ml-2 px-3 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
