import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav({}) {
  return (
    <div id="Nav">
    <Link to='/'>
    <h2>Nav </h2>


    </Link>
      <ul>
        <Link to='/About'>
          <li>About</li>
        </Link>
        <Link to='/Shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  );
}
