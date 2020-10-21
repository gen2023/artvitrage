import React, { Component } from 'react';

// import Modal from '../components/Modal';
import ImageGallery from '../components/ImageGallery';

import GalleryText from '../json/pages/gallery.json';
import images from '../json/pages/galleryImage.json';

export default class Gallery extends Component {
  // const Gallery = nameLang => {
  state = {
    // images: [],
    // query: '',
    // page: 1,
    // isLoading: false,
    // error: null,

    isModal: false,
    // currentImage: null,
  };
  // static propTypes = { nameLang: String };

  /*  language = nameLang => {
    let heading = GalleryText.headingRu;
    let text = GalleryText.textRu;

    if (nameLang.data === 'Ru') {
      heading = GalleryText.headingRu;
      text = GalleryText.textRu;
    } else {
      if (nameLang.data === 'En') {
        heading = GalleryText.headingEn;
        text = GalleryText.textEn;
      }
    }
  };*/
  language = props => {
    console.log(props);
  };

  toggleModal = image => {
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentImage: prevState.isModal ? null : image,
    }));
  };

  handleImageClick = image => {
    this.toggleModal(image);
  };

  render() {
    // const { isModal, currentImage, language } = this.state;
    const { language } = this.state;

    console.log(language);
    return (
      <>
        {/* {isModal && <Modal image={currentImage} onToggle={this.toggleModal} />} */}
        <ImageGallery
          images={images}
          onClick={this.handleImageClick}
          language={language}
        />
      </>
      // <div>
      //   <div>
      //     <h1 style={{ textAlign: "center" }}>{heading}</h1>
      //     <div className="textAbout">{text}</div>
      //   </div>
      //   <div className="gallery">
      //     <img
      //       src={process.env.PUBLIC_URL + "/portrait_human/1.jpg"}
      //       alt="titleHuman"
      //     />
      //   </div>
      // </div>
    );
  }
}

// export default Gallery;
