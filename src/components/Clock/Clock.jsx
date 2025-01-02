import { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    intervalId: null,
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
    console.log(this.intervalId);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId); // треба закривати бо буде втеча памʼяті якщо компонент закривається як модалка
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}

export { Clock };
