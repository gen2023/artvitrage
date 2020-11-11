import React, { Component } from 'react';
import {connect} from 'react-redux';

import pictureRu from '../../json/ru/galleryImage.json';
import pictureEn from '../../json/en/galleryImage.json';
import './imageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  
// const ImageGallery = ({ images, onClick,size }) => {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return pictureRu;
  }
  else
  {return pictureEn;}
 }

  render() {
   const {images, onClick}=this.props;
    const list=this.funcLanguage();
    console.log(list)
  return (
    <>
    <h1>{list.category}</h1>
    <ul className="ImageGallery">
      {images.map(({ id, large,small,name,size }) => (
        <ImageGalleryItem
          key={id}
          name={name}
          large={large}
          small={small}
          size={size}          
          onClick={onClick}
        />
      ))}
    </ul>
    </>
  );
};
}

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language}}

export default connect(mapStateToProps)(ImageGallery)