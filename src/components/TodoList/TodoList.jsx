import React from 'react';
import css from './TodoList.module.css';

import classNames from 'classnames/bind';

function makeOptionClassName(completed) {
  const cx = classNames.bind(css);
  return {
    listClass: cx('TodoList__item', { TodoList__item__completed: completed }),
    textClass: cx('text', { text__completed: completed }),
  };
}

function TodoList({ todos, onDeleteTodo, onCompletedTodo }) {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ text, id, completed }, index) => {
        const { listClass, textClass } = makeOptionClassName(completed);

        return (
          <li key={id} className={listClass}>
            <p className={textClass}>{text}</p>
            <input
              type="checkbox"
              className={css}
              checked={completed}
              onChange={() => onCompletedTodo(id)}
            ></input>
            <button
              type="button"
              className={css.button__delete}
              onClick={() => onDeleteTodo(id)}
            >
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export { TodoList };
