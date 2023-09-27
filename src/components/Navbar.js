import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"  onClick={props.toggle} 
            />
            <label
              className={`form-check-label text-${props.mode === "light"?"dark":"light"}`}
              htmlFor="flexSwitchCheckDefault" 
            >
              {props.btn}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Sachin",
  home: "Sachin's Home",
};
