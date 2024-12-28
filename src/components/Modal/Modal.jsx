import { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={css.modal}>
        <div className={css.backDrop}>{this.props.children}</div>
      </div>
    );
  }
}

export { Modal };
