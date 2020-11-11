import React, { Component } from 'react';
import {connect} from 'react-redux';

import pictureRu from '../json/ru/galleryImage.json';
import pictureEn from '../json/en/galleryImage.json';
import Modal from '../components/Modal';
import ImageGallery from '../components/ImageGallery';

class GalleryImage extends Component {
  state = {
    images: pictureRu.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
    name:null,
    size:null,
    isModal: false,
    currentImage: null,
  };

  toggleModal = (image,size,name) => {
    
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentImage: prevState.isModal ? null : image,
      size:size,
      name:name,
    }));
  };

  handleImageClick = (image,size,name) => {
    
    this.toggleModal(image,size,name);
  };

  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){    
    return pictureRu.filter(cat=>cat.categoryFind===this.props.match.params.galleryId);
  }
  else
  {return pictureEn.filter(cat=>cat.categoryFind===this.props.match.params.galleryId);}
 }
  
  render() {
    const { images, isModal, currentImage, size, name } = this.state;
    
    const list=this.funcLanguage();
    // console.log(list[0].categoryTitle);
    return (<> <br /> <br /> <br /> <br /> <br />
    {isModal && <Modal image={currentImage} size={size} name={name} onToggle={this.toggleModal} />}
    <h1>{list[0].categoryTitle}</h1>
    <ImageGallery images={images} onClick={this.handleImageClick} />
    
</>
    );
  }
}
// export default GalleryImage;
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language}}

export default connect(mapStateToProps)(GalleryImage)