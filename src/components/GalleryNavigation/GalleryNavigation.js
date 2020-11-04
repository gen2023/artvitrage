import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';

import GalleryNavigationItem from './GalleryNavigationItem';

import './GalleryNavigation.css';

export default class GalleryNavigation extends Component {
  static propTypes = {
    list: propTypes.array.isRequired,
  };

  editLang = event => {
    if (event) {
      if (event.target.alt === 'lang_Ru') {
        return this.setState({ nameLang: 'Ru' });
      } else if (event.target.alt === 'lang_En') {
        return this.setState({ nameLang: 'En' });
      }
    }
  };
  language() {}
  render() {
    const { nameLang } = "Ru";
    //  console.log({ props.match.url });
    return (
      <Fragment>
        
          
          <nav className="listCategoryGallery">
            <ul className="galleryNavigation">
              {this.props.list.map(
                ({ id, categoryRu, categoryEn,picture,link }) => (
                  <GalleryNavigationItem
                    key={id}
                    categoryName={nameLang === 'Ru' ? categoryRu : categoryEn}
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
