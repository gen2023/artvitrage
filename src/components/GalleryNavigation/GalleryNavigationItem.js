import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GalleryNavigationItem({ categoryName, picture,link }) {
  console.log(link)
  return (
  // <Link to={link}>
    <li className="galleryNavigationItem">
      <Link to={link}>
      
      <span>{categoryName}</span>
      {/* </Link> */}
      <img
        src={picture}
        alt=""
        className="galleryNavigationItem-image"
        // onClick={() => onClick(picture)}
      />
      
     </Link>
    </li> 
    // </Link>
  );
}

GalleryNavigationItem.propTypes = {
  name: propTypes.string.isRequired,
};

export default GalleryNavigationItem;
