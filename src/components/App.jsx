import { Component } from 'react';

import { TodoList } from '../components/TodoList';
import initialTodos from '../todos.json';

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  test() {
    console.log(this.state.todos.map(todos => todos.completed));
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todoId === todo.id) {
          // console.log('знайшли той туду');

          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    // this.test();

    const { todos } = this.state;

    const allTodos = todos.length;

    const toDoComleted = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <div>
          <p>Кількість ToDo: {allTodos}</p>
          <p>Кількість виконаних ToDo: {toDoComleted}</p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onCompletedTodo={this.toggleCompleted}
        />
      </>
    );
  }
}
