import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class ModalVideoPlay extends Component {
  
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
    const { video,description,name} = this.props;
    // console.log(this.props);
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="modalContent">
            <div className="contentModalVideo">
                <div className="titleModalVideo">
                    <h1>{name}</h1>
                </div>
                <div className="Modal">
                    <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button type="button" className="closeButton" data-action="closeModal"></button>
                </div> 
                <div className="descriptionModalVideo">  
                    {description}
                </div>
            </div>      
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default ModalVideoPlay;
