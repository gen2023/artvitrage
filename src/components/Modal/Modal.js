import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
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
    const { image,size,name } = this.props;
    console.log(this.props);
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="modalContent">
          <div className="Modal">
            <img className="Modal" src={image} alt="" />
          </div>
          <div className="description">
            <div>name:{name}</div>
            <div>size:{size}</div>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Modal;
