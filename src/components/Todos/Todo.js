import {
  RiTodoFill,
  RiDeleteBin2Line,
  RiCheckboxLine,
  RiCheckboxFill,
} from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.todoDelete}
        onClick={() => deleteTodo(todo.id)}
      />
      {todo.isCompleted ? (
        <RiCheckboxFill
          className={styles.todoCheck}
          onClick={() => toggleTodo(todo.id)}
        />
      ) : (
        <RiCheckboxLine
          className={styles.todoCheck}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </div>
  );
}

export default Todo;
