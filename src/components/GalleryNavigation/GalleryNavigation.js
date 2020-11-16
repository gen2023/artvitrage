import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';

import textPageRu from '../../json/ru/GalleryNavigation.json';
import textPageEn from '../../json/en/GalleryNavigation.json';

import GalleryNavigationItem from './GalleryNavigationItem';

import './GalleryNavigation.css';

class GalleryNavigation extends Component {

  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return textPageRu;
  }
  else
  {return textPageEn;}
 }
  language() {}
  render() {
    const list=this.funcLanguage();
    return (
      <Fragment>
        
          
          <nav className="listCategoryGallery">
            <ul className="galleryNavigation">
              {list.map(
                ({ id,  category,picture }) => (
                  <GalleryNavigationItem
                    key={id}
                    categoryName={category}
                    picture={picture}
                    link={`gallery/${id}`}
                  />
                ),
              )}
            </ul>
          </nav>

      </Fragment>
    );
  }
}

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(GalleryNavigation)