import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import AddTodo from './components/AddTodo';
import { TodoList } from './components/TodoList';
const App = () => {
  return (
    <TodoProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
