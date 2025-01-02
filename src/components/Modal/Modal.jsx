import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  hadleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      console.log('натисли кнопку ескейп');

      this.props.onClose();
    }
  };

  componentDidMount() {
    // console.log('componentDidMountMODAL');
    window.addEventListener('keydown', this.hadleKeyDown);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmounMODAL');
    window.removeEventListener('keydown', this.hadleKeyDown);
  }

  backDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.modal} onClick={this.backDropClick}>
        <div className={css.backDrop}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export { Modal };
