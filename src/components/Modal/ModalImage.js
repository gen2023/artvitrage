import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class ModalImage extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
    const closeModal = document.querySelector('button[data-action="closeModal"]');
    closeModal.addEventListener('click', this.handleBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggle();
    }
  };

  render() {
    const { image} = this.props;
    console.log(this.props);
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="modalContent">
          <div className="Modal">
            <img className="Modal" src={image} alt="" />
            <button type="button" className="closeButton" data-action="closeModal"></button>
          </div>         
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default ModalImage;
