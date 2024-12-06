import { Component } from 'react';

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
      <form className="" onSubmit={this.handleSubmit}>
        <textarea
          className=""
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="">
          Додати
        </button>
      </form>
    );
  }
}

export { TodoEditor };
