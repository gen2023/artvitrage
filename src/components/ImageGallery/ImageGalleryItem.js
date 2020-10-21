import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ picture, onClick, categoryName }) => {
  // console.log(categoryName);
  return (
    <li className="ImageGalleryItem">
      <span>{categoryName}</span>
      <img
        src={picture}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => onClick(picture)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
