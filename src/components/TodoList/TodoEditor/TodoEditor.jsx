import { Component } from 'react';
import css from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={css.formAddTodo} onSubmit={this.handleSubmit}>
        <textarea
          className={css.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className={css.buttonAddTodo}>
          Додати
        </button>
      </form>
    );
  }
}

export { TodoEditor };
