import React from 'react';
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationItem({ name, link, classNameStyle }) {
  return (
    <li>
      <Link to={link}>
        <span className={classNameStyle}></span>
        {name}
      </Link>
    </li>
  );
}

// NavigationItem.propTypes = {
//   name: propTypes.string.isRequired,
// };

export default NavigationItem;
