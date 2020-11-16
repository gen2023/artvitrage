import React, { Component } from 'react';
import Modal from '../Modal/ModalImage';
import { Link } from 'react-router-dom';

import PhotoItems from './PhotoItems';

import routes from '../../services/routes';

import './photo.css';

export default class Photo extends Component {
  
 state = {
  images: this.props.images,
  isModal: false,
  currentImage: null,
};

toggleModal = (image) => {
    
  this.setState(prevState => ({
    isModal: !prevState.isModal,
    currentImage: prevState.isModal ? null : image,
  }));
};

handleImageClick = (image) => {
    
  this.toggleModal(image);
};  

  render() {
    const { images,isModal, currentImage} = this.state;
   const {text}=this.props;
    console.log(text)
  return (
    <>{isModal && <Modal image={currentImage} onToggle={this.toggleModal} />}
    <br /> <br /> <br /> <br /> <br />
    <Link to={routes.about}>
        <span>{text.go_back}</span>
    </Link>
    <h1>{text.heading}</h1>
    <div>{text.text}</div>
    <ul className="photo">
      {images.map(({ id, large,small }) => (
        <PhotoItems
          key={id}
          large={large}
          small={small}
          onClick={this.handleImageClick}
        />
      ))}
    </ul>
    </>
  );
};
}

//получение языка в пропах
// const mapStateToProps=state=>{return {language: state.language.language}}

// export default connect(mapStateToProps)(Photo)