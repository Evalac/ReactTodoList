import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.modal}>
        <div className={css.backDrop}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export { Modal };
