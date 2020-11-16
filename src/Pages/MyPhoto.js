import React, {Component} from "react";
import {connect} from 'react-redux';

import Photo from '../components/Photo';
// import Modal from '../components/Modal/ModalImage';

import textPageRu from '../json/ru/myPhoto.json';
import textPageEn from '../json/en/myPhoto.json';
import textGeneralRu from '../json/ru/general.json';
import textGeneralEn from '../json/en/general.json';
import imagePage from '../json/pages/myPhotoImage.json';

class MyPhoto extends Component {

  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return Object.assign(textPageRu,textGeneralRu);
  }
  else
  { return Object.assign(textPageEn,textGeneralEn);}; 
 }

  render() {
  
    return <>

    <Photo text={this.funcLanguage()} images={imagePage} />;
    </>
  }
}

const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(MyPhoto)