import { Component } from 'react';

class Tabs extends Component {
  state = {
    activeTabidx: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabidx !== this.state.activeTabidx;
  } //цей метод перевіряє чи активна вкладка по якій був клік щоб перерендерити чи ні

  setActiveTabidx = idx => {
    this.setState({ activeTabidx: idx });
  };

  render() {
    console.log('render');

    const { activeTabidx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabidx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabidx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h1>{activeTab.label}</h1>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}

export { Tabs };
