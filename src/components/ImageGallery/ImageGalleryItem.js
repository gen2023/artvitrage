import React from 'react';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ large,small, onClick,name,size }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={small}
        alt={name}
        className="ImageGalleryItem-image"
        onClick={() => onClick(large,size,name)}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   large: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
