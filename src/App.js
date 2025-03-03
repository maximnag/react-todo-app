import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const presistedTodos = window.localStorage.getItem('TODOS');
    return presistedTodos !== null ? JSON.parse(presistedTodos) : [];
  });

  const addTodoHandler = (text) => {
    if (text !== '') {
      const newTodo = {
        text,
        isCompleted: false,
        id: uuidv4(),
      };
      setTodos([...todos, newTodo]);
      window.localStorage.setItem('TODOS', JSON.stringify([...todos, newTodo]));
    }
  };

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    window.localStorage.setItem('TODOS', JSON.stringify(newTodos));
  };

  const toggleTodoHandler = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    );
    setTodos(newTodos);
    window.localStorage.setItem('TODOS', JSON.stringify(newTodos));
  };

  const resetTodoHandler = () => {
    setTodos([]);
    window.localStorage.setItem('TODOS', []);
  };

  const deleteCompletedTodosHandler = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
    window.localStorage.setItem('TODOS', JSON.stringify(newTodos));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Just Do Something</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodoHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
      {completedTodosCount > 0 && (
        <TodoList
          completedTodos={completedTodosCount}
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      )}
      {!todos.length && <h2>Todo list is empty</h2>}
    </div>
  );
}

export default App;
