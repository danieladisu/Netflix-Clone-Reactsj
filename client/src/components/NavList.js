/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Css/Nav.css";
function NavList({ ListItems }) {
  return (
    <div className="nav1">
      <div className="ListContainer">
        {ListItems.map((list, i) => (
          <ul key={i}>
            <li>
              <Link className="list__items" to={list.link}>
                {list.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default NavList;
