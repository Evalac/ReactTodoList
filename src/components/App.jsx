import { Component } from 'react';
import uniqid from 'uniqid';

import { TodoList } from '../components/TodoList';
import initialTodos from '../todos.json';

import { TodoEditor } from './TodoList/TodoEditor/TodoEditor';
import { Filter } from './TodoList/TodoFilter/TodoFilter';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  test() {
    console.log(uniqid());
    // console.log(this.state.todos.map(todos => todos.completed));
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

  addTodo = text => {
    const todo = {
      id: uniqid(),
      text: text,
      completed: false,
    };

    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };

  filterTodo = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    // this.test();

    const { todos } = this.state;

    const allTodos = todos.length;

    const toDoComleted = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    const filterdTodo = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    console.log(filterdTodo);

    return (
      <>
        <TodoEditor addTodo={this.addTodo} />
        <Filter value={this.state.filter} filterChange={this.filterTodo} />
        <div>
          <p>Кількість ToDo: {allTodos}</p>
          <p>Кількість виконаних ToDo: {toDoComleted}</p>
        </div>
        <TodoList
          todos={filterdTodo}
          onDeleteTodo={this.deleteTodo}
          onCompletedTodo={this.toggleCompleted}
        />
      </>
    );
  }
}
