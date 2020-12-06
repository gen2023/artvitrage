import React from 'react';

const ImageGalleryItem = ({ large,small, onClick,name,size }) => {
  return (
    <li className="ImagesGalleryItem">
      <img
        src={small}
        alt={name}
        className="ImagesGalleryItem-image"
        onClick={() => onClick(large,size,name)}
      />
    </li>
  );
};

export default ImageGalleryItem;
