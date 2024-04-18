import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

export const TodoList = () => {
  const { todos, removeTodo, completeTodo } = useContext(TodoContext);

  return (
    <div className="flex flex-col space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

