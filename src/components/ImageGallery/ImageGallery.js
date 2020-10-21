import React from 'react';
import { connect } from 'react-redux';
import './imageGallery.css';
import ImageGalleryItem from './ImageGalleryItem';
// import PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick, language }) => {
  console.log(language);
  return (
    <ul className="ImageGallery">
      {images.map(({ id, picture, categoryRu, categoryEn }) => (
        <ImageGalleryItem
          key={id}
          picture={picture}
          categoryName={language === 'Ru' ? categoryRu : categoryEn}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       picture: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onClick: PropTypes.func.isRequired,
// };
const mapStateToProps = state => {
  return { language: state.nameLang };
};
export default connect(mapStateToProps)(ImageGallery);
// export default ImageGallery;
