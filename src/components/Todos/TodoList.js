import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo, completedTodos }) {
  return (
    <div>
      {todos.map((todo) =>
        completedTodos
          ? todo.isCompleted && (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            )
          : !todo.isCompleted && (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            )
      )}
    </div>
  );
}

export default TodoList;
