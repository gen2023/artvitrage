import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import textPageRu from '../json/ru/galleryImage.json';
import textPageEn from '../json/en/galleryImage.json';
import textGeneralRu from '../json/ru/general.json';
import textGeneralEn from '../json/en/general.json';

import Modal from '../components/Modal';
import ImageGallery from '../components/ImageGallery';

import routes from '../services/routes';

class GalleryImage extends Component {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){    
     
    return Object.assign(
      textPageRu.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
      textGeneralRu
      );
  }
  else
  {
    return Object.assign(
      textPageEn.filter(cat=>cat.categoryFind===this.props.match.params.galleryId),
      textGeneralEn
      );
  };
 }
  state = {
    images: this.funcLanguage(),
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


  
  render() {
    const { images, isModal, currentImage, size, name } = this.state;
    // const { location, history } = this.props;
    // console.log(history.push(location?));
    // console.log(history.push(location?.state?.from));
    const list=this.funcLanguage();
    // console.log(list);
    return (<> <br /> <br /> <br /> <br /> <br />
    {isModal && <Modal image={currentImage} size={size} name={name} onToggle={this.toggleModal} />}
    <Link to={routes.gallery}>
        <span>{list.go_back}</span>
    </Link>
    <h1>{list[0].categoryTitle}</h1>
    <ImageGallery images={images} onClick={this.handleImageClick} />
    
</>
    );
  }
}
// export default GalleryImage;
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(GalleryImage)