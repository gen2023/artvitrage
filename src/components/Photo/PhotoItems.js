import React from 'react';

const PhotoItems = ({ large,small, onClick }) => {
  return (
    <li className="PhotoItem">
      <img
        src={small}
        alt=""
        className="photoItem-image"
        onClick={() => onClick(large)}
      />
    </li>
  );
};

export default PhotoItems;
