import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavigationItem({ name, link }) {
  return (
    <li>
      {/* <NavLink to="/books" className="link" activeClassName="active-link">
    Books
  </NavLink> */}
      <NavLink to={link}> {name}</NavLink>
    </li>
  );
}

NavigationItem.propTypes = {
  name: propTypes.string.isRequired,
};

export default NavigationItem;
