import { Component } from 'react';
import uniqid from 'uniqid';
import css from './App.module.css';

import { TodoList } from '../components/TodoList';
import initialTodos from '../todos.json';

import tabs from '../tabs.json';

import { TodoEditor } from './TodoList/TodoEditor/TodoEditor';
import { Filter } from './TodoList/TodoFilter/TodoFilter';
import { Modal } from './Modal/Modal';
import { Clock } from './Clock/Clock';
import { Tabs } from './Tabs/Tabs';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

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

  componentDidMount() {
    //цей метод викликається один раз після рендеру
    const todos = JSON.parse(localStorage.getItem('todos'));
    console.log(
      'componentDidMount: цей метод викликається один раз після рендеру'
    );

    if (todos) {
      this.setState({ todos: todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //цей метод викликається завжи після зміни в стейті

    if (this.state.todos !== prevState.todos) {
      console.log(
        `componentDidUpdate: цей метод викликається завжи після зміни в стейті`
      );
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    console.log('toggleModal');

    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos } = this.state;

    const allTodos = todos.length;

    const toDoComleted = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    const filterdTodo = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.appContainer}>
        {/* <Tabs items={tabs} />
        <Clock />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={css.modalContent}>
              <h1>Контент модалки як чілдрен</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                temporibus libero consequuntur, eius deserunt nam fugit ab
                deleniti delectus architecto excepturi, assumenda mollitia ullam
                ipsa cupiditate fuga molestiae velit esse.
              </p>
              <button type="button" onClick={this.toggleModal}>
                Close modal
              </button>
            </div>
          </Modal>
        )} */}
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
      </div>
    );
  }
}
