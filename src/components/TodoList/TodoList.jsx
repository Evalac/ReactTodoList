import React from 'react';
import css from './TodoList.module.css';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ text, id, completed }, index) => (
        <li key={id} className={css.TodoList__item}>
          <p className={css.text}>{text}</p>
          <button
            type="button"
            className={css.button__delete}
            onClick={() => onDeleteTodo(id)}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}

export { TodoList };
