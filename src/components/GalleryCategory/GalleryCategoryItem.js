import React from 'react';
import { Link } from 'react-router-dom';

function GalleryCategoryItem({ categoryName, picture,link }) {
  console.log(picture);
  return (
  // <Link to={link}>
    <li className="galleryCategoryItem">
      <Link to={link}>
      
      <span>{categoryName}</span>
      {/* </Link> */}
      <img
        src={picture}
        alt=""
        className="galleryCategoryItem-image"
        // onClick={() => onClick(picture)}
      />
      
     </Link>
    </li> 
    // </Link>
  );
}

export default GalleryCategoryItem;
